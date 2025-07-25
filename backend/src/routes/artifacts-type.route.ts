
import { Hono } from "hono";
import { getAllType, getTypeById, updateTypeById, createType, deleteTypeById } from "../controllers/artifacts-type.controller.js"


const artifactTypeRouter = new Hono();

artifactTypeRouter.get("/artifact-type", getAllType);
artifactTypeRouter.get("/artifact-type/:id", getTypeById);
artifactTypeRouter.put("/artifact-type/:id", updateTypeById);
artifactTypeRouter.post("/artifact-type", createType);
artifactTypeRouter.delete("/artifact-type/:id", deleteTypeById);

export default artifactTypeRouter;
