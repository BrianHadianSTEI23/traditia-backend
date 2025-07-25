
import { Hono } from "hono";
import { create, getAll, getByEmail, getById, updateByEmail, updateById, deleteByEmail, deleteById } from "../controllers/user.controller.js"

const user = new Hono();

user.post('/user/', create);
user.get('/user/', getAll);
user.get('/user/:id', getById);
user.get('/user/:email', getByEmail);
user.put('/user/:id', updateById);
user.put('/user/:email', updateByEmail);
user.delete('/user/:id', deleteById);
user.delete('/user/:email', deleteByEmail);

export default user;
