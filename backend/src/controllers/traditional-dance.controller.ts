import {
  createTraditionalDance,
  getAllTraditionalDance,
  getTraditionalDanceByID,
  getTraditionalDanceByEthnicID,
  updateTraditionalDanceByID,
  updateTraditionalDanceByEthnicID,
  deleteArtifactById,
  deleteArtifactByEthnicId
} from "../repositories/traditional-dance.repository.js";
import type { Context } from "hono";

// POST: create a new traditional dance
export const create = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalDance(body);
  return c.json({ status: 201, body: created });
};

// GET: get all traditional dances
export const getAll = async (c: Context) => {
  const result = await getAllTraditionalDance();
  return c.json({ status: 200, body: result });
};

// GET: get traditional dance by ID
export const getById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalDanceByID(id);
  return c.json({ status: 200, body: result });
};

// GET: get traditional dance by ethnic group ID
export const getByEthnicId = async (c: Context) => {
  const id = Number(c.req.param("ethnic_id"));
  const result = await getTraditionalDanceByEthnicID(id);
  return c.json({ status: 200, body: result });
};

// PUT: update traditional dance by ID
export const updateById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalDanceByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// PUT: update traditional dance by ethnic group ID
export const updateByEthnicId = async (c: Context) => {
  const id = Number(c.req.param("ethnic_id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalDanceByEthnicID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// DELETE: delete traditional dance by ID
export const deleteById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactById(id);
  return c.json({ status: 200, body: deleted });
};

// DELETE: delete traditional dance by ethnic group ID
export const deleteByEthnicId = async (c: Context) => {
  const id = Number(c.req.param("ethnic_id"));
  const deleted = await deleteArtifactByEthnicId(id);
  return c.json({ status: 200, body: deleted });
};
