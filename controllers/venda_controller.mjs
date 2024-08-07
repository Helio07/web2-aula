import notebook from "../models/Notebook.mjs";
import Venda from "../models/Venda.mjs";

const VendaController = Object.create(Object.prototype);

VendaController.new = async (req, res) => {
    const created = await Venda.create({
        notebookId: req.body.notebookId, 
        cliente: req.body.cliente, 
        vendedor: req.body.vendedor, 
        data: req.body.data
    });
    res.json(created);
};

VendaController.one = async (req, res) => {
    const l = await Venda.findOne({
        where: { id: req.params.id }
    });
    res.json(l);
};

VendaController.all = async (req, res) => {
    const all = await Venda.findAll();
    const ret = [];
    for (let i = 0; i < all.length; i++) {
        ret.push({
            ...all[i].dataValues,
            notebook: await all[i].getNotebook()
        });     
    }
    res.json(ret);
};

VendaController.edit = async (req, res) => {
    const l = await Venda.findOne({
        where: { id: req.body.id }
    });
    l.cliente = req.body.cliente;
    l.vendedor = req.body.vendedor;
    l.data = req.body.data;
    await l.save();
    res.json(l);
};

VendaController.remove = async (req, res) => {
    const l = await Venda.findOne({
        where: { id: req.body.id }
    });
    await l.destroy();
    res.json(l);
};

export default VendaController;
