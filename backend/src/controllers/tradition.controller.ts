import { type Context } from "hono";
import {
  createTradition,
  getAllTraditon,
  getTraditonById,
  getTraditonByName,
  updateTraditonByID,
  updateTraditonByName,
  deleteTraditionById,
  deleteTraditionByName,
} from "../repositories/tradition.repository.js"; // adjust path as needed

// Create a new tradition
export const create = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTradition(body);
  return c.json({ status: 201, body: created });
};

// Get all traditions
export const getAll = async (c: Context) => {
  const traditions = await getAllTraditon();
  return c.json({ status: 200, body: traditions });
};

// Get tradition by ID
export const getById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ status: 400, message: "Invalid ID" });
  const tradition = await getTraditonById(id);
  return c.json({ status: 200, body: tradition });
};

// Get tradition by name
export const getByName = async (c: Context) => {
  const name = c.req.param("name");
  const tradition = await getTraditonByName(name);
  return c.json({ status: 200, body: tradition });
};

// Update by ID
export const updateById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ status: 400, message: "Invalid ID" });
  const updatedFields = await c.req.json();
  const result = await updateTraditonByID(id, updatedFields);
  return c.json({ status: 200, body: result });
};

// Update by name
export const updateByName = async (c: Context) => {
  const name = c.req.param("name");
  const updatedFields = await c.req.json();
  const result = await updateTraditonByName(name, updatedFields);
  return c.json({ status: 200, body: result });
};

// Delete by ID
export const deleteById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ status: 400, message: "Invalid ID" });
  const result = await deleteTraditionById(id);
  return c.json({ status: 200, body: result });
};

// Delete by name
export const deleteByName = async (c: Context) => {
  const name = c.req.param("name");
  const result = await deleteTraditionByName(name);
  return c.json({ status: 200, body: result });
};
