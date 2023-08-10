class ClienteRepository{
//CRUD // Colocar todas as regras para o SQL
create() {
    const dadosCliente = req.body
    const sql = "INSERT INTO clientes SET ?;" 
    conexao.query(sql, dadosCliente, (error, result) => {
        if(error){
            res.status(404).json({'erro': error})
        }else{           
            res.status(201).json(result)
        }
    })
}

findAll() {
    const sql = "SELECT * FROM clientes"
            conexao.query(sql, (error, result) => {
                if(error){
                    res.status(404).json({'erro': error})
                }else{
                    res.status(200).json(result)
                }
            })
}

findById() {
    const idCliente = req.params.id
            const sql = "SELECT * FROM clientes WHERE idCliente=?;" 
            conexao.query(sql, idCliente, (error, result) => {
                const linha = result[0]
                if(error){
                    res.status(404).json({'erro': error})
                }else{           
                    res.status(200).json(linha)
                }
            })
}

update() {

}

delete() {

}

}

export default new ClienteRepository