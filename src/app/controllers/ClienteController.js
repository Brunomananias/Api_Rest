//Colocar toda regra de negócio
//Regra genericas que vão ser usadas para chamar do repositorio os métodos
import conexao from '../database/conexao.js'
import ClienteRepository from '../repositories/ClienteRepository.js'

class ClienteController{
    //listar tudo
    async index(req, res){
            const row = await ClienteRepository.findAll()
            res.json(row)
    }
    //listar tudo por id
    async show(req, res){
            const idCliente = req.params.id
            const row = await ClienteRepository.findById(idCliente) 
            res.json(row)
    }

    //criar dados
    async store(req, res){
            const nomeCliente = req.body
            const row = await ClienteRepository.create(nomeCliente)
            res.json(row)
    }

    //atualizar dados
    async update(req, res){
            const idCliente = req.params.id
            const cliente = req.body
            const row = await ClienteRepository.update(cliente, idCliente)
            res.json(row)
    }

    //deletar dados
    async delete(req, res){
            const idCliente = req.params.id
            const row = await ClienteRepository.delete(idCliente)
            res.json(row)
    }

}

//padrão sigleton
export default new ClienteController()