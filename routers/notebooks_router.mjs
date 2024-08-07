import { Router } from 'express';
import notebookController from '../controllers/notebook_controller.mjs';

const notebookRouter = Router();

notebookRouter.use((req, res, next) => {
    if (req.session.logged) {
        next();
    } else {
        res.json({ logged: false });
    }
});

notebookRouter.get('/', notebookController.all)
notebookRouter.post('/', notebookController.new)
notebookRouter.put('/', notebookController.edit)
notebookRouter.delete('/', notebookController.remove)
notebookRouter.get('/:id', notebookController.one)

export default notebookRouter