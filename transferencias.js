import pool from './config/db.js';

export async function registrarTransferencia(descripcion, fecha, monto, cuenta_origen, cuenta_destino) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const resultadoOrigen = await client.query('SELECT saldo FROM cuentas WHERE id = $1', [cuenta_origen]);
        const saldoOrigen = resultadoOrigen.rows[0].saldo;
        if (saldoOrigen < monto) {
            throw new Error('Saldo insuficiente en la cuenta de origen');
        }
        await client.query('UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2', [monto, cuenta_origen]);
        await client.query('UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2', [monto, cuenta_destino]);
        const resultado = await client.query(
            'INSERT INTO transferencias (descripcion, fecha, monto, cuenta_origen, cuenta_destino) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [descripcion, fecha, monto, cuenta_origen, cuenta_destino]
        );
        await client.query('COMMIT');
        console.log('Última transferencia registrada:', resultado.rows[0]);
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error en la transacción:', error);
    } finally {
        client.release();
    }
}

export async function obtenerUltimasTransferencias(cuenta_id) {
    try {
        const resultado = await pool.query('SELECT * FROM transferencias WHERE cuenta_origen = $1 OR cuenta_destino = $1 ORDER BY fecha DESC LIMIT 10', [cuenta_id]);
        console.log(resultado.rows);
    } catch (error) {
        console.error('Error al consultar transferencias:', error);
    }
}
