import {
  createTraditionalClass,
  getAllTraditionalClass,
  getTraditionalClassByID,
  updateTraditionalClassByID,
  deleteArtifactById
} from "../repositories/tradition-class.repository.js";
import type { Context } from "hono";

// Create a traditional class
export const postTraditionalClass = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalClass(body);
  return c.json({ status: 201, body: created });
};

// Read all traditional classes
export const getTraditionalClasses = async (c: Context) => {
  const classes = await getAllTraditionalClass();
  return c.json({ status: 200, body: classes });
};

// Read a traditional class by ID
export const getTraditionalClass = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalClassByID(id);
  return c.json({ status: 200, body: result });
};

// Update a traditional class by ID
export const putTraditionalClass = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalClassByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// Delete a traditional class by ID
export const deleteTraditionalClass = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactById(id);
  return c.json({ status: 200, body: deleted });
};
