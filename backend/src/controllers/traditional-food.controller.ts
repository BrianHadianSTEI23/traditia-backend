import {
  createTraditionalFood,
  getAllTraditionalFood,
  getTraditionalFoodByID,
  updateTraditionalFoodByID,
  deleteArtifactById
} from "../repositories/traditional-food.repository.js";
import type { Context } from "hono";

// POST: create a new traditional food
export const postTraditionalFood = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalFood(body);
  return c.json({ status: 201, body: created });
};

// GET: get all traditional food
export const getTraditionalFoods = async (c: Context) => {
  const result = await getAllTraditionalFood();
  return c.json({ status: 200, body: result });
};

// GET: get traditional food by ID
export const getTraditionalFoodById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalFoodByID(id);
  return c.json({ status: 200, body: result });
};

// PUT: update traditional food by ID
export const putTraditionalFoodById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalFoodByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// DELETE: delete traditional food by ID
export const deleteTraditionalFoodById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactById(id);
  return c.json({ status: 200, body: deleted });
};
