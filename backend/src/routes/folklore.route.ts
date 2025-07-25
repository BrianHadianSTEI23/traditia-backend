
import { Hono } from "hono";
import { getAll, getByEthnicId, getById, updateByEthnicId, updateById, create, deleteByEthnicIdController, deleteByIdController } from "../controllers/folklore.controller.js"
import { getByName } from "../controllers/ethnic-group.controller.js";

const folkloreRouter = new Hono();

folkloreRouter.post('/folklore/', create);
folkloreRouter.get('/folklore/', getAll);
folkloreRouter.get('/folklore/:ethnicId', getByEthnicId);
folkloreRouter.get('/folklore/:id', getById);
folkloreRouter.get('/folklore/:name', getByName);
folkloreRouter.put('/folklore/:ethnicId', updateByEthnicId);
folkloreRouter.put('/folklore/:id', updateById);
folkloreRouter.delete('/folklore/:ethnicId', deleteByEthnicIdController);
folkloreRouter.delete('/folklore/:id', deleteByIdController);

export default folkloreRouter;
