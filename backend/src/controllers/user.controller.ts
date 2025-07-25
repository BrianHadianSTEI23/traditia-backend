import { type Context } from "hono"
import {
    getAllUser, getUserByEmail, getUserByID,
    createUser, updateUserByEmail, updateUserByID,
    deleteUserByEmail, deleteUserById
} from "../repositories/user.repository.js"

// get ll user
export const getAll = async (c : Context) => {
    const content = await getAllUser();
    return c.json({ status : 200, body : content})
}

// get by email
export const getByEmail = async ( c : Context) => {
    const body = await c.req.json();
    const { email, ...rest} = body;
    const content = getUserByEmail(email);
    return c.json({ status : 200, body : content})
}

// get by id
export const getById = async ( c : Context) => {
    const body = await c.req.json();
    const { user_id, ...rest} = body;
    const content = getUserByID(user_id);
    return c.json({ status : 200, body : content})
}

// create user
export const create = async (c : Context) => {
    const body = await c.req.json();
    const { id, name, email, password,  ...rest}  = body;
    const e = {
        id : id, 
        name : name,
        email : email,
        password : password
    }
    await createUser(e)
    return c.json({status : 200, body : e})
}

// update by id
export const updateById = async (c : Context) => {
    const body = await c.req.json();
    const { id,  ...rest}  = body;
    await updateUserByID(id, rest)
    return c.json({status : 200, body : rest})
}

// update by email
export const updateByEmail = async (c : Context) => {
    const body = await c.req.json();
    const { email,  ...rest}  = body;
    await updateUserByEmail(email, rest)
    return c.json({status : 200, body : rest})
}

// delete by id
export const deleteById = async (c : Context) => {
    const body = await c.req.json();
    const { id,  ...rest}  = body;
    await deleteUserById(id)
    return c.json({status : 200, body : "user deleted successfully"})
}

// delete by email
export const deleteByEmail = async (c : Context) => {
    const body = await c.req.json();
    const { email,  ...rest}  = body;
    await deleteByEmail(email)
    return c.json({status : 200, body : "user(s) deleted successfully"})
}
