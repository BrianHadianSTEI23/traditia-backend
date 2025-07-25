import { type Context } from "hono";
import {
  createFolklore,
  getAllFolklore,
  getByFolkloreByID,
  getFolkloreByEthnicID,
  updateFolkloreById,
  updateFolkloreByEthnicID,
  deleteById,
  deleteByEthnicId
} from "../repositories/folklore.repository.js";

// Create
export const create = async (c: Context) => {
  const body = await c.req.json();
  const result = await createFolklore(body);
  return c.json({ status: 201, message: "Folklore created", data: result });
};

// Get all
export const getAll = async (c: Context) => {
  const result = await getAllFolklore();
  return c.json({ status: 200, data: result });
};

// Get by ID
export const getById = async (c: Context) => {
  const id = await c.req.param('id');

  if (typeof id !== "number") {
    return c.json({ status: 400, message: "Invalid ID" }, 400);
  }

  const result = await getByFolkloreByID(id);
  if (!result || result.length === 0) {
    return c.json({ status: 404, message: "Folklore not found" }, 404);
  }

  return c.json({ status: 200, data: result });
};

// Get by ethnic group ID
export const getByEthnicId = async (c: Context) => {
  const ethnic_group_id = await c.req.param('ethnicId');

  if (typeof ethnic_group_id !== "number") {
    return c.json({ status: 400, message: "Invalid Ethnic Group ID" }, 400);
  }

  const result = await getFolkloreByEthnicID(ethnic_group_id);
  return c.json({ status: 200, data: result });
};

// Update by ID
export const updateById = async (c: Context) => {
  const id = await c.req.param('id');
  const body = await c.req.json();

  if (typeof id !== "number") {
    return c.json({ status: 400, message: "Invalid ID" }, 400);
  }

  const result = await updateFolkloreById(id, body);
  return c.json({ status: 200, message: "Folklore updated", data: result });
};

// Update by ethnic group ID
export const updateByEthnicId = async (c: Context) => {
  const body = await c.req.json();
  const { ethnic_group_id, ...fields } = body;

  if (typeof ethnic_group_id !== "number") {
    return c.json({ status: 400, message: "Invalid Ethnic Group ID" }, 400);
  }

  const result = await updateFolkloreByEthnicID(ethnic_group_id, fields);
  return c.json({ status: 200, message: "Folklore updated", data: result });
};

// Delete by ID
export const deleteByIdController = async (c: Context) => {
  const id = await c.req.param('id');

  if (typeof id !== "number") {
    return c.json({ status: 400, message: "Invalid ID" }, 400);
  }

  await deleteById(id);
  return c.json({ status: 200, message: "Folklore deleted by ID" });
};

// Delete by Ethnic Group ID
export const deleteByEthnicIdController = async (c: Context) => {
  const ethnic_group_id = await c.req.param('ethnicId');

  if (typeof ethnic_group_id !== "number") {
    return c.json({ status: 400, message: "Invalid Ethnic Group ID" }, 400);
  }

  await deleteByEthnicId(ethnic_group_id);
  return c.json({ status: 200, message: "Folklore deleted by Ethnic Group ID" });
};
