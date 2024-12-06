import { createPool } from "mysql2/promise";

// Crear el pool de conexiones
const pool = createPool({
    host: 'bk2djhelqjju5ad5mdwk-mysql.services.clever-cloud.com',
    user: 'uoqgqxmxvuokzr6p',
    password: '0mHmSjwFxrlKvS8HXjxj',
    port: 3306,
    database: 'bk2djhelqjju5ad5mdwk'
});

// Definir la función connectDB para conectarse a la base de datos
export async function connectDB() {
    try {
        const connection = await pool.getConnection();
        console.log("Conexión exitosa a la base de datos");
        return connection; // Retorna la conexión para su uso
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error.message);
        return null; // Retorna null en caso de error
    }
}