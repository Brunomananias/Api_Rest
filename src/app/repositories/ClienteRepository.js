import conexao from '../database/conexao.js'

class ClienteRepository {
    //CRUD // Colocar todas as regras para o SQL
    create(cliente) {
        const sql = "INSERT INTO clientes SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, cliente, (error, result) => {
                if (error) return reject('Não foi possível cadastrar')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM clientes"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) return reject('Não foi possível localizar')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM clientes WHERE idCliente=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id,(error, result) => {
                if (error) return reject('Não foi possível localizar')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    update(cliente, idCliente) {
        const sql = "UPDATE clientes SET ? WHERE idCliente=?;" 
        return new Promise((resolve, reject) => {
            conexao.query(sql, [cliente, idCliente],(error, result) => {
                if (error) return reject('Não foi possível atualizar')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    delete(idCliente) {
        const sql = "DELETE FROM clientes WHERE idCliente=?;" 
        return new Promise((resolve, reject) => {
            conexao.query(sql, idCliente,(error, result) => {
                if (error) return reject('Não foi possível apagar')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

}

export default new ClienteRepository