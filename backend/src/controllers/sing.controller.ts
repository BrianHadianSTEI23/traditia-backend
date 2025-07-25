import { type Context } from "hono";
import {
  createSings,
  getAllSings,
  getSingsBySongID,
  getSingsByEthnicID,
  updateSingsByEthnicID,
  updateSingsByTraditionalHouseID,
  deleteArtifactByTraditionalSongId,
  deleteArtifactByEthnicId,
} from "../repositories/sing.repository.js";

// CREATE
export const postSings = async (c: Context) => {
  try {
    const body = await c.req.json();
    const inserted = await createSings(body);
    return c.json({ status: 201, message: "Sings record created", data: inserted });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// READ ALL
export const getAll = async (c: Context) => {
  const all = await getAllSings();
  return c.json({ status: 200, data: all });
};

// READ BY TRADITIONAL SONG ID
export const getBySongId = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ status: 400, message: "Invalid song ID" }, 400);

  const result = await getSingsBySongID(id);
  return c.json({ status: 200, data: result });
};

// READ BY ETHNIC ID
export const getByEthnicId = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ status: 400, message: "Invalid ethnic ID" }, 400);

  const result = await getSingsByEthnicID(id);
  return c.json({ status: 200, data: result });
};

// UPDATE BY ETHNIC ID
export const updateByEthnicId = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id, ...updatedFields } = body;

    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ethnic ID" }, 400);
    }

    const updated = await updateSingsByEthnicID(id, updatedFields);
    return c.json({ status: 200, message: "Updated by ethnic ID", data: updated });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// UPDATE BY TRADITIONAL SONG ID
export const updateBySongId = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id, ...updatedFields } = body;

    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing song ID" }, 400);
    }

    const updated = await updateSingsByTraditionalHouseID(id, updatedFields);
    return c.json({ status: 200, message: "Updated by traditional song ID", data: updated });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// DELETE BY TRADITIONAL SONG ID
export const deleteBySongId = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id } = body;

    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing song ID" }, 400);
    }

    await deleteArtifactByTraditionalSongId(id);
    return c.json({ status: 200, message: "Deleted by traditional song ID" });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};

// DELETE BY ETHNIC ID
export const deleteByEthnicId = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id } = body;

    if (!id || typeof id !== "number") {
      return c.json({ status: 400, message: "Invalid or missing ethnic ID" }, 400);
    }

    await deleteArtifactByEthnicId(id);
    return c.json({ status: 200, message: "Deleted by ethnic ID" });
  } catch (err) {
    console.error(err);
    return c.json({ status: 500, message: "Internal server error" }, 500);
  }
};
