import { type Context } from "hono"; // or whatever framework you're using
import {
  createLandmark,
  getAllLandmark,
  getByLandmarkByID,
  getLandmarkByName,
  updateLandmarkById,
  updateLandmarkByEthnicID,
  deleteById
} from "../repositories/landmark.repository.js"; // adjust import path accordingly

// Create
export const create = async (c: Context) => {
  try {
    const body = await c.req.json();
    const result = await createLandmark(body);
    return c.json({ status: 201, message: "Landmark created", data: result });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// Get All
export const getAll = async (c: Context) => {
  try {
    const result = await getAllLandmark();
    return c.json({ status: 200, data: result });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// Get by ID
export const getById = async (c: Context) => {
  try {
    const { id } = await c.req.json();
    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ID" }, 400);
    }

    const result = await getByLandmarkByID(id);
    if (!result || result.count === 0) {
      return c.json({ status: 404, message: "Landmark not found" }, 404);
    }

    return c.json({ status: 200, data: result });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// Get by Name
export const getByName = async (c: Context) => {
  try {
    const name = await c.req.param('name');
    if (!name || typeof name !== "string") {
      return c.json({ status: 400, message: "Invalid or missing name" }, 400);
    }

    const result = await getLandmarkByName(name);
    if (!result || result.count === 0) {
      return c.json({ status: 404, message: "Landmark not found" }, 404);
    }

    return c.json({ status: 200, data: result });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// Update by ID
export const updateById = async (c: Context) => {
  try {
    const id = await c.req.param('id');
    const fields = await c.req.json();
    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ID" }, 400);
    }

    const result = await updateLandmarkById(id, fields);
    return c.json({ status: 200, message: "Landmark updated", data: result });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// Update by Name
export const updateByName = async (c: Context) => {
  try {
    const name = await c.req.param('name');
    const fields = await c.req.json();
    if (!name || typeof name !== "string") {
      return c.json({ status: 400, message: "Invalid or missing name" }, 400);
    }

    const result = await updateLandmarkByEthnicID(name, fields);
    return c.json({ status: 200, message: "Landmark updated", data: result });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// Delete by ID
export const deleteByID = async (c: Context) => {
  try {
    const { id } = await c.req.json();
    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ID" }, 400);
    }

    const result = await getByLandmarkByID(id);
    if (!result || result.count === 0) {
      return c.json({ status: 404, message: "Landmark not found" }, 404);
    }

    await deleteById(id);
    return c.json({ status: 200, message: "Landmark deleted", data: result });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};
