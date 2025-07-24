
import { Hono } from "hono";
import { getArtifact, storeArtifact } from "../controllers/artifacts.controller.js";

const artifactRouter = new Hono();

artifactRouter.post('/artifacts', storeArtifact);
artifactRouter.get('/artifacts', getArtifact)

export default artifactRouter;
