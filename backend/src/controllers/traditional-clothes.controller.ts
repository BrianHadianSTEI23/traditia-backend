import {
  createTraditionalClothes,
  getAllTraditionalClothes,
  getTraditionalClothesByID,
  updateTraditionalClothesByID,
  deleteArtifactById,
} from "../repositories/traditional-clothes.repository.js";
import type { Context } from "hono";

// POST: create a new traditional clothing item
export const postTraditionalClothes = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalClothes(body);
  return c.json({ status: 201, body: created });
};

// GET: get all traditional clothing
export const getTraditionalClothes = async (c: Context) => {
  const result = await getAllTraditionalClothes();
  return c.json({ status: 200, body: result });
};

// GET: get traditional clothing by ID
export const getTraditionalClothesById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalClothesByID(id);
  return c.json({ status: 200, body: result });
};

// PUT: update traditional clothing by ID
export const putTraditionalClothesById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalClothesByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// DELETE: delete traditional clothing by ID
export const deleteTraditionalClothesById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactById(id);
  return c.json({ status: 200, body: deleted });
};
