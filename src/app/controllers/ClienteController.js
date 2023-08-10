//Colocar toda regra de negócio
//Regra genericas que vão ser usadas para chamar do repositorio os métodos
import conexao from '../database/conexao.js'
import ClienteRepository from '../repositories/ClienteRepository.js'

class ClienteController{
    //listar tudo
    index(req, res){
            const row = ClienteRepository.findAll()
            res.json(row)
    }
    //listar tudo por id
    show(req, res){
            
    }


    //criar dados
    store(req, res){
           
    }

    //atualizar dados
    update(req, res){
            const idCliente = req.params.id
            const dadosCliente = req.body
            const sql = "UPDATE clientes SET ? WHERE idCliente=?;" 
            conexao.query(sql, [dadosCliente, idCliente], (error, result) => {
                if(error){
                    res.status(400).json({'erro': error})
                }else{           
                    res.status(200).json(result)
                }
            })
    }

    //deletar dados
    delete(req, res){
            const idCliente = req.params.id
            const sql = "DELETE FROM clientes WHERE idCliente=?;" 
            conexao.query(sql, idCliente, (error, result) => {
                if(error){
                    res.status(404).json({'erro': error})
                }else{           
                    res.status(200).json(result)
                }
            })
    }




}

//padrão sigleton
export default new ClienteController()