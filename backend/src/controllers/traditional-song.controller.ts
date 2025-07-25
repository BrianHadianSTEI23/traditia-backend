import {
  createTraditionalSong,
  getAllTraditionalSong,
  getTraditionalSongByID,
  updateTraditionalSongByID,
  deleteArtifactById
} from "../repositories/traditional-song.repository.js";
import type { Context } from "hono";

// POST: create a new traditional song
export const postTraditionalSong = async (c: Context) => {
  const body = await c.req.json();
  const created = await createTraditionalSong(body);
  return c.json({ status: 201, body: created });
};

// GET: get all traditional songs
export const getTraditionalSongs = async (c: Context) => {
  const result = await getAllTraditionalSong();
  return c.json({ status: 200, body: result });
};

// GET: get traditional song by ID
export const getTraditionalSongById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getTraditionalSongByID(id);
  return c.json({ status: 200, body: result });
};

// PUT: update traditional song by ID
export const putTraditionalSongById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateTraditionalSongByID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// DELETE: delete traditional song by ID
export const deleteTraditionalSongById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactById(id);
  return c.json({ status: 200, body: deleted });
};
