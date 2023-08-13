import mysql from 'mysql'
import * as dotenv from 'dotenv'
dotenv.config()

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conexao.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada 
 * @param {string=id | [cliente, id]} valores a serem passados para o sql 
 * @param {string} mensagemReject mensagem a ser exibida 
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if (error) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao