
import { Hono } from "hono";
import { getAll, getByEthnicId, getBySongId, updateByEthnicId, updateBySongId, create, deleteByEthnicId, deleteBySongId } from "../controllers/sing.controller.js"

const singRouter = new Hono();

singRouter.post('/sing/', create);
singRouter.get('/sing/', getAll);
singRouter.get('/sing/:ethnicId', getByEthnicId);
singRouter.get('/sing/:songId', getBySongId);
singRouter.put('/sing/:ethnicId', updateByEthnicId);
singRouter.put('/sing/:songId', updateBySongId);
singRouter.delete('/sing/:ethnicId', deleteByEthnicId);
singRouter.delete('/sing/:songId', deleteBySongId);

export default singRouter;
