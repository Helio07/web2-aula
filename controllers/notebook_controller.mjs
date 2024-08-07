import notebook from "../models/Notebook.mjs";

const notebookController = {
    "new": async (req, res) => {
        try {
            const created = await notebook.create({
                fabricante: req.body.fabricante,
                modelo: req.body.modelo,
                preco: req.body.preco,
                estoque: req.body.estoque,
                description: req.body.description
            });
            res.status(201).json(created); // Mudança de status 204 para 201 e envio do objeto criado
        } catch (error) {
            console.error("Erro ao criar notebook:", error);
            res.status(500).json({ error: "Erro ao criar notebook" });
        }
    },

    "one": async (req, res) => {
        try {
            const v = await notebook.findOne({
                where: { id: req.params.id }
            });
            if (v) {
                res.json(v);
            } else {
                res.status(404).json({ error: "Notebook não encontrado" });
            }
        } catch (error) {
            console.error("Erro ao buscar notebook:", error);
            res.status(500).json({ error: "Erro ao buscar notebook" });
        }
    },

    "all": async (req, res) => {
        try {
            const notebooks = await notebook.findAll();
            res.json(notebooks);
        } catch (error) {
            console.error("Erro ao buscar notebooks:", error);
            res.status(500).json({ error: "Erro ao buscar notebooks" });
        }
    },

    "edit": async (req, res) => {
        try {
            const v = await notebook.findOne({
                where: { id: req.body.id }
            });
            if (v) {
                v.fabricante = req.body.fabricante;
                v.modelo = req.body.modelo;
                v.preco = req.body.preco;
                v.estoque = req.body.estoque;
                v.description = req.body.description;
                await v.save();
                res.json(v);
            } else {
                res.status(404).json({ error: "Notebook não encontrado" });
            }
        } catch (error) {
            console.error("Erro ao editar notebook:", error);
            res.status(500).json({ error: "Erro ao editar notebook" });
        }
    },

    "remove": async (req, res) => {
        try {
            const v = await notebook.findOne({
                where: { id: req.body.id }
            });
            if (v) {
                await v.destroy();
                res.json({ message: "Notebook removido com sucesso" });
            } else {
                res.status(404).json({ error: "Notebook não encontrado" });
            }
        } catch (error) {
            console.error("Erro ao remover notebook:", error);
            res.status(500).json({ error: "Erro ao remover notebook" });
        }
    }
};

export default notebookController;
