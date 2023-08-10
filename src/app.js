import express from 'express'
import conexao from './app/database/conexao.js'
import ClienteController from './app/controllers/clienteController.js'
const app = express()

// indicar para o express ler body com json
app.use(express.json())

//ROTAS
app.get('/clientes', ClienteController.index)

app.get('/clientes/:id', ClienteController.show)

app.post('/clientes', ClienteController.store)

app.delete('/clientes/:id', ClienteController.delete)

app.put('/clientes/:id', ClienteController.update)

export default app