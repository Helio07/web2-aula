import express from 'express'
import veiculo from './models/veiculo.mjs'


const app = express()
const port = 3000

app.get('/veiculos', async (req, res) => {
    res.json(await veiculo.findAll())
})

app.post('/veiculos', async (req, res) => {
    const  created = await veiculo.create({fabricante: "GM", modelo: "Corsa"});

    res.send(created)
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})
