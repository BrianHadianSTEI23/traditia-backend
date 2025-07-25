
import { Hono } from "hono";
import { create, getAll, getById, updateById, deleteById, deleteByEthnicId, updateByEthnicId, getByEthnicId } from "../controllers/traditional-dance.controller.js"

const traditionDanceRouter = new Hono();

traditionDanceRouter.post('/tradition-dance/', create);
traditionDanceRouter.get('/tradition-dance/', getAll);
traditionDanceRouter.get('/tradition-dance/:id', getById);
traditionDanceRouter.get('/tradition-dance/:ethnicId', getByEthnicId);
traditionDanceRouter.put('/tradition-dance/:id', updateById);
traditionDanceRouter.put('/tradition-dance/:ethnicId', updateByEthnicId);
traditionDanceRouter.delete('/tradition-dance/:id', deleteById);
traditionDanceRouter.delete('/tradition-dance/:ethnicId', deleteByEthnicId);

export default traditionDanceRouter;
