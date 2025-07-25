
import { Hono } from "hono";
import { create, getAll, getById, updateById, deleteById } from "../controllers/traditional-house.controller.js"

const traditionHouseRouter = new Hono();

traditionHouseRouter.post('/tradition-house/', create);
traditionHouseRouter.get('/tradition-house/', getAll);
traditionHouseRouter.get('/tradition-house/:id', getById);
traditionHouseRouter.put('/tradition-house/:id', updateById);
traditionHouseRouter.delete('/tradition-house/:id', deleteById);

export default traditionHouseRouter;
