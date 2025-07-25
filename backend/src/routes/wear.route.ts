
import { Hono } from "hono";
import { create, getAll, getByEthnicId, getByTraditionalClothesId, updateByEthnicId, updateByTraditionalClothesId, deleteByEthnicId, deleteByTraditionalClothesId } from "../controllers/wear.controller.js"

const wearRouter = new Hono();

wearRouter.post('/wear/', create);
wearRouter.get('/wear/', getAll);
wearRouter.get('/wear/:ethnicId', getByEthnicId);
wearRouter.get('/wear/:traditionalClothesId', getByTraditionalClothesId);
wearRouter.put('/wear/:ethnicId', updateByEthnicId);
wearRouter.put('/wear/:traditionalClothesId', updateByTraditionalClothesId);
wearRouter.delete('/wear/:ethnicId', deleteByEthnicId);
wearRouter.delete('/wear/:traditionalClothesId', deleteByTraditionalClothesId);

export default wearRouter;
