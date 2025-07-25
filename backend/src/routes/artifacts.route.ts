
import { Hono } from "hono";
import { getAll, getByCreatedDate, getByHash, updateByHash, create, deleteById } from "../controllers/artifacts.controller.js"

const artifactRouter = new Hono();

artifactRouter.post('/artifact', create);
artifactRouter.get('/artifact/', getAll);
artifactRouter.get('/artifact/{:date}', getByCreatedDate(date));
artifactRouter.get('artifact/{:hash}', getByHash(hash));
artifactRouter.put('artifact/new', updateByHash);
artifactRouter.delete('artifact/{:hash}', deleteById)

export default artifactRouter;
