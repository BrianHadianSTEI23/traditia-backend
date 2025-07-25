import { type Context } from "hono";
import {
  createLanguage,
  getAllLanguage,
  getByLanguageByID,
  getLanguageByName,
  updateLanguageById,
  deleteById,
} from "../repositories/language.repository.js";

// CREATE
export const create = async (c: Context) => {
  try {
    const body = await c.req.json();
    const inserted = await createLanguage(body);
    return c.json({ status: 201, message: "Language created", data: inserted });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// READ ALL
export const getAll = async (c: Context) => {
  const all = await getAllLanguage();
  return c.json({ status: 200, data: all });
};

// READ BY ID
export const getById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ status: 400, message: "Invalid ID" }, 400);

  const result = await getByLanguageByID(id);
  if (!result || result.length === 0)
    return c.json({ status: 404, message: "Language not found" }, 404);

  return c.json({ status: 200, data: result });
};

// READ BY NAME
export const getByName = async (c: Context) => {
  const name = c.req.param("name");
  if (!name) return c.json({ status: 400, message: "Missing name" }, 400);

  const result = await getLanguageByName(name);
  if (!result || result.length === 0)
    return c.json({ status: 404, message: "Language not found" }, 404);

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

    const existing = await getByLanguageByID(id);
    if (!existing || existing.length === 0) {
      return c.json({ status: 404, message: "Language not found" }, 404);
    }

    const updated = await updateLanguageById(id, updatedFields);
    return c.json({ status: 200, message: "Language updated", data: updated });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// DELETE BY ID
export const deleteLanguageById = async (c: Context) => {
  try {
    const id = await c.req.param('id');
    const body = await c.req.json();

    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ID" }, 400);
    }

    const existing = await getByLanguageByID(id);
    if (!existing || existing.length === 0) {
      return c.json({ status: 404, message: "Language not found" }, 404);
    }

    await deleteById(id);
    return c.json({ status: 200, message: "Language deleted", data: existing });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};
