import {
  createTraditionalFood,
  getAllTraditionalFood,
  getTraditionalFoodByID,
  updateTraditionalFoodByID,
  deleteTraditionalFoodById
} from "../repositories/traditional-food.repository.js";
import type { Context } from "hono";

// POST: create a new traditional food
export const create = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalFood(body);
  return c.json({ status: 201, body: created });
};

// GET: get all traditional food
export const getAll = async (c: Context) => {
  const result = await getAllTraditionalFood();
  return c.json({ status: 200, body: result });
};

// GET: get traditional food by ID
export const getById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalFoodByID(id);
  return c.json({ status: 200, body: result });
};

// PUT: update traditional food by ID
export const updateByFoodId = async (c: Context) => {
  const id = Number(c.req.param("foodId"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalFoodByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// DELETE: delete traditional food by ID
export const deleteByFoodId = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteTraditionalFoodById(id);
  return c.json({ status: 200, body: deleted });
};
