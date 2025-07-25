
import { Hono } from "hono";
import { getAll, getById, updateById, deleteById, create } from "../controllers/tradition-class.controller.js"

const traditionClassRouter = new Hono();

traditionClassRouter.post('/tradition-class/', create);
traditionClassRouter.get('/tradition-class/', getAll);
traditionClassRouter.get('/tradition-class/:id', getById);
traditionClassRouter.put('/tradition-class/:id', updateById);
traditionClassRouter.delete('/tradition-class/:id', deleteById);

export default traditionClassRouter;
