
import { Hono } from "hono";
import { getAll, getByEthnicId, getByTraditionalHouseId, updateByEthnicID, updateByTraditionalHouseID, create, deleteByEthnicId, deleteByTranditionalHouseId } from "../controllers/lives.controller.js"

const livesRouter = new Hono();

livesRouter.post('/lives/', create);
livesRouter.get('/lives/', getAll);
livesRouter.get('/lives/:ethnicId', getByEthnicId);
livesRouter.get('/lives/:traditionalHouseId', getByTraditionalHouseId);
livesRouter.put('/lives/:ethnicId', updateByEthnicID);
livesRouter.put('/lives/:traditionalHouseId', updateByTraditionalHouseID);
livesRouter.delete('/lives/:traditionalHouseId', deleteByTranditionalHouseId);
livesRouter.delete('/lives/:ethnicId', deleteByEthnicId);

export default livesRouter;
