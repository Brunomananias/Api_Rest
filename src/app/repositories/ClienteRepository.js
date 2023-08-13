import { consulta } from '../database/conexao.js'
//Persistencia de dados
class ClienteRepository {
    //CRUD // Colocar todas as regras para o SQL
    create(NomeCliente) {
        const sql = "INSERT INTO clientes SET ?"
        return consulta(sql, NomeCliente, 'Não foi possível localizar')
    }

    findAll() {
        const sql = "SELECT * FROM clientes"
        return consulta(sql, 'Não foi possível localizar')
      
    }

    findById(id) {
        const sql = "SELECT * FROM clientes WHERE IdCliente=?;"
        return consulta(sql, id, 'Não foi possível localizar')
    }

    update(cliente, idCliente) {
        const sql = "UPDATE clientes SET ? WHERE idCliente=?;" 
        return consulta(sql, [cliente, idCliente], 'Não foi possível atualizar')
    }

    delete(idCliente) {
        const sql = "DELETE FROM clientes WHERE idCliente=?;" 
        return consulta(sql, idCliente, 'Não foi possível deletar')
    }
}

export default new ClienteRepository