import { registrarTransferencia, obtenerUltimasTransferencias } from './transferencias.js';
import { consultarSaldo } from './cuentas.js';

const args = process.argv.slice(2);

if (args[0] === 'registrar') {
    const [ , descripcion, fecha, monto, cuenta_origen, cuenta_destino] = args;
    registrarTransferencia(descripcion, fecha, parseFloat(monto), parseInt(cuenta_origen), parseInt(cuenta_destino));
} else if (args[0] === 'consultar') {
    const [ , cuenta_id] = args;
    obtenerUltimasTransferencias(parseInt(cuenta_id)).then(console.log);
} else if (args[0] === 'saldo') {
    const [ , cuenta_id] = args;
    consultarSaldo(parseInt(cuenta_id)).then(console.log);
}
