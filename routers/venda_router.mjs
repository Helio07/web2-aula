import { Router } from 'express';

import VendaController from '../controllers/venda_controller.mjs';

const vendaRouter = Router();

vendaRouter.use((req, res, next) => {
    if (req.session.logged) {
        next();
    } else {
        res.json({ logged: false });
    }
});

vendaRouter.get('/', VendaController.all);
vendaRouter.get('/:id', VendaController.one);
vendaRouter.post('/', VendaController.new);
vendaRouter.put('/', VendaController.edit);
vendaRouter.delete('/', VendaController.remove);

export default vendaRouter;