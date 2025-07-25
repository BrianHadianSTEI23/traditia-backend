import {
  createLives,
  getAllLives,
  getLivesByTraditionalHouseID,
  getLivesByEthnicID,
  updateLivesByEthnicID,
  updateLivesByTraditionalHouseID,
  deleteArtifactByTraditionalHouseId,
  deleteArtifactByEthnicId,
} from "../repositories/tradition.repository.js";
import type { Context } from "hono";

// Create a life relationship
export const postLives = async (c: Context) => {
  const body = await c.req.json();
  const created = await createLives(body);
  return c.json({ status: 201, body: created });
};

// Get all lives
export const getLives = async (c: Context) => {
  const result = await getAllLives();
  return c.json({ status: 200, body: result });
};

// Get lives by traditional_house_id
export const getLivesByTraditionalHouse = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getLivesByTraditionalHouseID(id);
  return c.json({ status: 200, body: result });
};

// Get lives by ethnic_group_id
export const getLivesByEthnic = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const result = await getLivesByEthnicID(id);
  return c.json({ status: 200, body: result });
};

// Update lives by ethnic_group_id
export const putLivesByEthnic = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateLivesByEthnicID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// Update lives by traditional_house_id
export const putLivesByTraditionalHouse = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const updatedFields = await c.req.json();
  const updated = await updateLivesByTraditionalHouseID(id, updatedFields);
  return c.json({ status: 200, body: updated });
};

// Delete lives by traditional_house_id
export const deleteLivesByTraditionalHouse = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactByTraditionalHouseId(id);
  return c.json({ status: 200, body: deleted });
};

// Delete lives by ethnic_group_id
export const deleteLivesByEthnic = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const deleted = await deleteArtifactByEthnicId(id);
  return c.json({ status: 200, body: deleted });
};
