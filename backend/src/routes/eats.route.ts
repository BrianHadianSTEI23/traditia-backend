
import { Hono } from "hono";
import { getAll, getByEthnicId, getByFoodId, updateByEthnicID, updateByFoodID, create, deleteByEthnicId, deleteByFoodId } from "../controllers/eats.controller.js"

const eatsRouter = new Hono();

eatsRouter.post('/eats', create);
eatsRouter.put('/eats/:ethnicId', updateByEthnicID);
eatsRouter.put('/eats/:foodId', updateByFoodID);
eatsRouter.delete('/eats/:foodId', deleteByFoodId)

export default eatsRouter;
