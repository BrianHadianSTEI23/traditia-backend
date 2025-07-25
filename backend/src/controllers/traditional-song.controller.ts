import {
  createTraditionalSong,
  getAllTraditionalSong,
  getTraditionalSongByID,
  updateTraditionalSongByID,
  deleteTraditionalSongById,
  getTraditionalSongByName
} from "../repositories/traditional-song.repository.js";
import type { Context } from "hono";

// POST: create a new traditional song
export const create = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalSong(body);
  return c.json({ status: 201, body: created });
};

// GET: get all traditional songs
export const getAll = async (c: Context) => {
  const result = await getAllTraditionalSong();
  return c.json({ status: 200, body: result });
};

// GET: get traditional song by ID
export const getBySongId = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalSongByID(id);
  return c.json({ status: 200, body: result });
};

// GET: get traditional song by ID
export const getBySongName = async (c: Context) => {
  const name = String(c.req.param("name"));
  const result = await getTraditionalSongByName(name);
  return c.json({ status: 200, body: result });
};

// PUT: update traditional song by ID
export const updateBySongId = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalSongByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// DELETE: delete traditional song by ID
export const deleteBySongId = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteTraditionalSongById(id);
  return c.json({ status: 200, body: deleted });
};
