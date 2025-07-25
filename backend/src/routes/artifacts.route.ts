
import { Hono } from "hono";
import { getAll, getByCreatedDate, getByHash, updateByHash, create, deleteByHash } from "../controllers/artifacts.controller.js"

const artifactRouter = new Hono();

artifactRouter.post('/artifact', create);
artifactRouter.get('/artifact/', getAll);
artifactRouter.get('/artifact/date/:date', getByCreatedDate);
artifactRouter.get('/artifact/:hash', getByHash);
artifactRouter.put('/artifact/hash/:hash', updateByHash);
artifactRouter.delete('/artifact/hash/:hash', deleteByHash)

export default artifactRouter;
