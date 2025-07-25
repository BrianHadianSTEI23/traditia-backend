
import { Hono } from "hono";
import { create, getAll, getBySongId, updateBySongId, deleteBySongId, getBySongName } from "../controllers/traditional-song.controller.js"

const traditionSongRouter = new Hono();

traditionSongRouter.post('/tradition-song/', create);
traditionSongRouter.get('/tradition-song/', getAll);
traditionSongRouter.get('/tradition-song/:name', getBySongName);
traditionSongRouter.get('/tradition-song/:id', getBySongId);
traditionSongRouter.put('/tradition-song/:id', updateBySongId);
traditionSongRouter.delete('/tradition-song/:id', deleteBySongId);

export default traditionSongRouter;
