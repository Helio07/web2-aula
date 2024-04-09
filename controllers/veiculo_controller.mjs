import veiculo from "../models/veiculo.mjs"

const veiculoController = {

    "new": async (req, res) => {
        const created = await veiculo.create({
            fabricante: req.body.fabricante,
            modelo: req.body.modelo
        })
        res.send(created)
    },

    "one": async (req, res) => {
        const v = await veiculo.findOne({
            where: {id: req.params.id} 
       })
       res.json(v)
    },

    "all": async (req, res) => {
        res.json(await veiculo.findAll())

    },

    "edit": async (req, res) => {
        const v = await veiculo.findOne({
             where: {id: req.body.id} 
        })
        v.fabricante = req.body.fabricante
        v.modelo = req.body.modelo
        await v.save()
        res.json(v)
    },

    "remove": async (req, res) => {
        const v = await veiculo.findOne({
            where: {id: req.body.id} 
       })

       v.destroy()
       res.json(v)
    }
}

export default veiculoController