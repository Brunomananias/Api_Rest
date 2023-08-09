import express from 'express'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

//mock - mockar dados
const clientes = [
    {id: 1, nome: 'Bruno'},
    {id: 2, nome: 'Lucca'},
    {id: 3, nome: 'Ana'},
    {id: 4, nome: 'Juninho'},
]

function buscarClientePorId(id){
    return clientes.filter(cliente => cliente.id == id)
}

function buscaIndexCliente(id){
    return clientes.findIndex(cliente => cliente.id == id)
}

// criar rota padrão ou raiz
app.get('/', (req, res) => {
 res.send('Testando wen!')
})

app.get('/clientes', (req, res) => {
    res.status(200).send(clientes)
})

app.get('/clientes/:id', (req, res) => {
    res.json(buscarClientePorId(req.params.id))
})

app.post('/clientes', (req, res) => {
    clientes.push(req.body)
    res.status(201).send('Cliente cadastrado com sucesso!')
})

app.delete('/clientes/:id', (req, res) => {
    let index  = buscaIndexCliente(req.params.id)
    clientes.splice(index, 1)
    res.send(`cliente com id ${req.params.id} cliente excluído com sucesso!`)
})

app.put('/clientes/:id', (req, res) => {
    let index = buscaIndexCliente(req.params.id)
    clientes[index].nome = req.body.nome
    res.json(clientes)
})

export default app