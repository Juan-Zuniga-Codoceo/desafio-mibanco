# Mi Banco

Este proyecto es una aplicación Node.js que se conecta a una base de datos PostgreSQL para gestionar transacciones bancarias. La aplicación permite registrar transferencias, consultar las últimas 10 transferencias de una cuenta específica y consultar el saldo de una cuenta.

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu_usuario/mi-banco.git
   cd mi-banco

2. Instala las dependencias:

    ```sh
    npm install

## Uso

Para utilizar la aplicación, ejecuta los siguientes comandos en la terminal:

Registrar una Transferencia
    ```sh
    node index.js registrar "Descripción de la transferencia" "AAAA-MM-DD" monto cuenta_origen cuenta_destino

Consultar Últimas 10 Transferencias`
    ```sh
    node index.js consultar cuenta_id

Consultar Saldo
    ```sh
    node index.js saldo cuenta_id

## Estructura del Proyecto

db.js: Configuración de la conexión a la base de datos.
transferencias.js: Funciones para registrar y consultar transferencias.
cuentas.js: Función para consultar el saldo de una cuenta.
index.js: Archivo principal que maneja los argumentos de la línea de comando y ejecuta las funciones correspondientes.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

## Contribuciones
Las contribuciones son bienvenidas. Para contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una rama nueva (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commits (git commit -m 'Añadir nueva funcionalidad').
Sube tu rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.

## Contacto
Si tienes alguna pregunta o sugerencia, por favor contacta a Juan Zúñiga.