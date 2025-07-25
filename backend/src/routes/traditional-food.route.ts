
import { Hono } from "hono";
import { create, getAll, getById, updateByFoodId, deleteByFoodId, getByName } from "../controllers/traditional-food.controller.js"

const traditionFoodRouter = new Hono();

traditionFoodRouter.post('/tradition-food/', create);
traditionFoodRouter.get('/tradition-food/', getAll);
traditionFoodRouter.get('/tradition-food/:id', getById);
traditionFoodRouter.get('/tradition-food/:name', getByName);
traditionFoodRouter.get('/tradition-food/:foodId', getById);
traditionFoodRouter.put('/tradition-food/:foodId', updateByFoodId);
traditionFoodRouter.delete('/tradition-food/:foodId', deleteByFoodId);

export default traditionFoodRouter;
