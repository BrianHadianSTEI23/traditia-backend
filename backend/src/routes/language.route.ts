
import { Hono } from "hono";
import { getAll, getByName, getById, updateById, create, deleteLanguageById } from "../controllers/language.controller.js"

const languageRouter = new Hono();

languageRouter.post('/language/', create);
languageRouter.get('/language/', getAll);
languageRouter.get('/language/:name', getByName);
languageRouter.get('/language/:id', getById);
languageRouter.put('/language/:id', updateById);
languageRouter.delete('/language/:id', deleteLanguageById);

export default languageRouter;
