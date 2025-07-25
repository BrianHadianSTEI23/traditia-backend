import { createSpeaks, getAllSpeaks, getSpeaksByEthnicID, getSpeaksByLanguageID, updateSpeaksByEthnicID, updateSpeaksByLanguageID, deleteArtifactByEthnicId, deleteArtifactByLanguageId } from "../repositories/speaks.repository.js";
import type { Context } from "hono";

// Create
export const postSpeaks = async (c: Context) => {
  const body = await c.req.json();
  const speaks = await createSpeaks(body);
  return c.json({ status: 201, body: speaks });
};

// Read all
export const getSpeaks = async (c: Context) => {
  const speaks = await getAllSpeaks();
  return c.json({ status: 200, body: speaks });
};

// Read by language_id
export const getSpeaksByLanguage = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const speaks = await getSpeaksByLanguageID(id);
  return c.json({ status: 200, body: speaks });
};

// Read by ethnic_id
export const getSpeaksByEthnic = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const speaks = await getSpeaksByEthnicID(id);
  return c.json({ status: 200, body: speaks });
};

// Update by language_id
export const putSpeaksByLanguage = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const speaks = await updateSpeaksByLanguageID(id, updatedFields);
  return c.json({ status: 200, body: speaks });
};

// Update by ethnic_id
export const putSpeaksByEthnic = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const speaks = await updateSpeaksByEthnicID(id, updatedFields);
  return c.json({ status: 200, body: speaks });
};

// Delete by language_id
export const deleteSpeaksByLanguage = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactByLanguageId(id);
  return c.json({ status: 200, body: deleted });
};

// Delete by ethnic_id
export const deleteSpeaksByEthnic = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactByEthnicId(id);
  return c.json({ status: 200, body: deleted });
};
