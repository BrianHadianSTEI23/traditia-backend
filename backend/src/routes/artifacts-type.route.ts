
import { Hono } from "hono";

const artifactTypeRouter = new Hono();

artifactTypeRouter.get("/");

export default artifactTypeRouter;
