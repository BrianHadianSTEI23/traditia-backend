import { type Context } from "hono";
import {
  createRegion,
  getAllRegion,
  getRegionByID,
  getRegionByName,
  updateRegionByID,
  deleteRegionById
} from "../repositories/region.repository.js";

// CREATE
export const create = async (c: Context) => {
  try {
    const body = await c.req.json();
    const inserted = await createRegion(body);
    return c.json({ status: 201, message: "Region created", data: inserted });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// READ ALL
export const getAll = async (c: Context) => {
  const all = await getAllRegion();
  return c.json({ status: 200, data: all });
};

// READ BY ID
export const getById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ status: 400, message: "Invalid ID" }, 400);

  const result = await getRegionByID(id);
  if (!result || result.count === 0)
    return c.json({ status: 404, message: "Region not found" }, 404);

  return c.json({ status: 200, data: result });
};

// READ BY NAME
export const getByName = async (c: Context) => {
  const name = c.req.param("name");
  if (!name) return c.json({ status: 400, message: "Missing name" }, 400);

  const result = await getRegionByName(name);
  if (!result || result.count === 0)
    return c.json({ status: 404, message: "Region not found" }, 404);

  return c.json({ status: 200, data: result });
};

// UPDATE BY ID
export const updateById = async (c: Context) => {
  try {
    const id = await c.req.param('id');
    const updatedFields = await c.req.json();

    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ID" }, 400);
    }

    const existing = await getRegionByID(id);
    if (!existing || existing.count === 0) {
      return c.json({ status: 404, message: "Region not found" }, 404);
    }

    const updated = await updateRegionByID(id, updatedFields);
    return c.json({ status: 200, message: "Region updated", data: updated });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// DELETE BY ID
export const deleteById = async (c: Context) => {
  try {
    const id = await c.req.param('id');

    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ID" }, 400);
    }

    const existing = await getRegionByID(id);
    if (!existing || existing.count === 0) {
      return c.json({ status: 404, message: "Region not found" }, 404);
    }

    await deleteRegionById(id);
    return c.json({ status: 200, message: "Region deleted", data: existing });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};
