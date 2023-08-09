import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456789',
    database: 'BarbeariaTZ'
})

export default conexao