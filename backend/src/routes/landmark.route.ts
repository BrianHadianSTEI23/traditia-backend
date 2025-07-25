
import { Hono } from "hono";
import { getAll, getByName, getById, updateByName, updateById, create, deleteByID } from "../controllers/landmark.controller.js"

const landmarkRouter = new Hono();

landmarkRouter.post('/landmark/', create);
landmarkRouter.get('/landmark/', getAll);
landmarkRouter.get('/landmark/:name', getByName);
landmarkRouter.get('/landmark/:id', getById);
landmarkRouter.put('/landmark/:name', updateByName);
landmarkRouter.put('/landmark/:id', updateById);
landmarkRouter.delete('/landmark/:id', deleteByID);

export default landmarkRouter;
