
import { Hono } from "hono";
import { getAll, getById, getByName, updateById, create, deleteById } from "../controllers/region.controller.js"

const regionRouter = new Hono();

regionRouter.post('/region/', create);
regionRouter.get('/region/', getAll);
regionRouter.get('/region/:id', getById);
regionRouter.get('/region/:name', getByName);
regionRouter.put('/region/:id', updateById);
regionRouter.delete('/region/:id', deleteById);

export default regionRouter;
