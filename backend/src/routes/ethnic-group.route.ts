
import { Hono } from "hono";
import { getAll, getByRegionId, getByName, updateByName, updateByRegionId, create, deleteByName } from "../controllers/ethnic-group.controller.js"

const ethnicGroupRouter = new Hono();

ethnicGroupRouter.post('/ethnic-group', create);
ethnicGroupRouter.get('/ethnic-group', getAll);
ethnicGroupRouter.get('/ethnic-group/:regionId', getByRegionId);
ethnicGroupRouter.get('/ethnic-group/:name', getByName);
ethnicGroupRouter.put('/ethnic-group/:name', updateByName);
ethnicGroupRouter.put('/ethnic-group/:regionId', updateByRegionId);
ethnicGroupRouter.delete('/ethnic-group/:name', deleteByName);

export default ethnicGroupRouter;
