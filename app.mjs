import express from 'express'
import veiculoController from './controllers/veiculo_controller.mjs'


const app = express()
const port = 3000

app.use(express.urlencoded())
app.use(express.json())

app.get('/veiculos', veiculoController.all)
app.post('/veiculos', veiculoController.new)
app.put('/veiculos', veiculoController.edit)
app.delete('/veiculos', veiculoController.remove)
app.get('/veiculos/:id', veiculoController.one)

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})

