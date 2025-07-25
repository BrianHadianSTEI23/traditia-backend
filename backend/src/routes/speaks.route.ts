
import { Hono } from "hono";
import { getAll, getByLanguageId, getSpeaksByEthnic, updateByEthnicId, updateByLanguageId, create, deleteByEthnicId, deleteByLanguageId } from "../controllers/speaks.controller.js"

const speakRouter = new Hono();

speakRouter.post('/speak/', create);
speakRouter.get('/speak/', getAll);
speakRouter.get('/speak/:languageId', getByLanguageId);
speakRouter.get('/speak/:ethnicId', getByLanguageId);
speakRouter.put('/speak/:ethnicId', updateByEthnicId);
speakRouter.put('/speak/:languageId', updateByLanguageId);
speakRouter.delete('/speak/:ethnicId', deleteByEthnicId);
speakRouter.delete('/speak/:languageId', deleteByLanguageId);

export default speakRouter;
