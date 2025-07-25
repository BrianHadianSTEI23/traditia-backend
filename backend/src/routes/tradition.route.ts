
import { Hono } from "hono";
import { create, getAll, getById, getByName, updateById, updateByName, deleteById, deleteByName } from "../controllers/tradition.controller.js"

const traditionRouter = new Hono();

traditionRouter.post('/tradition-class/', create);
traditionRouter.get('/tradition-class/', getAll);
traditionRouter.get('/tradition-class/:id', getById);
traditionRouter.get('/tradition-class/:name', getByName);
traditionRouter.put('/tradition-class/:id', updateById);
traditionRouter.put('/tradition-class/:name', updateByName);
traditionRouter.delete('/tradition-class/:id', deleteById);
traditionRouter.delete('/tradition-class/:name', deleteByName);

export default traditionRouter;
