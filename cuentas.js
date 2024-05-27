import pool from './config/db.js';

export async function consultarSaldo(cuenta_id) {
    try {
        const resultado = await pool.query('SELECT saldo FROM cuentas WHERE id = $1', [cuenta_id]);
        console.log(resultado.rows[0]);
    } catch (error) {
        console.error('Error al consultar saldo:', error);
    }
}
