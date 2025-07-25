import {
  createTraditionalHouse,
  getAllTraditionalHouse,
  getTraditionalHouseByID,
  updateTraditionalHouseByID,
  deleteTraditionalHouseById
} from "../repositories/traditional-house.repository.js";
import type { Context } from "hono";

// POST: create a new traditional house
export const create = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalHouse(body);
  return c.json({ status: 201, body: created });
};

// GET: get all traditional houses
export const getAll = async (c: Context) => {
  const result = await getAllTraditionalHouse();
  return c.json({ status: 200, body: result });
};

// GET: get traditional house by ID
export const getById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalHouseByID(id);
  return c.json({ status: 200, body: result });
};

// PUT: update traditional house by ID
export const updateById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalHouseByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// DELETE: delete traditional house by ID
export const deleteById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteTraditionalHouseById(id);
  return c.json({ status: 200, body: deleted });
};
