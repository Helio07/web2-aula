import express from 'express'
import veiculo from './models/veiculo.mjs'


const app = express()
const port = 3000

app.use(express.urlencoded())
app.use(express.json())

app.get('/veiculos', async (req, res) => {
    res.json(await veiculo.findAll())
})

app.post('/veiculos', async (req, res) => {
    console.log(req.body)
   
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})
