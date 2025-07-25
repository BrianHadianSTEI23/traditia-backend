import {
  createWear, getAllWear, getWearByEthnicID, getWearByTraditionalClothesID,
  updateWearByEthnicID, updateWearByTraditionalClothesID, deleteArtifactByEthnicId,
  deleteArtifactByTraditionalClothesId
} from "../repositories/wear.repository.js"
import type { Context } from "hono"

// create wear
export const create = async (c: Context) => {
  const body = await c.req.json();
  const { traditional_clothes_id, ethnic_group_id } = body;
  const e = { traditional_clothes_id, ethnic_group_id };
  await createWear(e);
  return c.json({ status: 200, body: e });
};

// get all
export const getAll = async (c: Context) => {
  const content = await getAllWear();
  return c.json({ status: 200, body: content });
};

// get by traditional clothes id
export const getByTraditionalClothesId = async (c: Context) => {
  const traditionalClothesId = Number(c.req.param("traditionalClothesId"));
  const content = await getWearByTraditionalClothesID(traditionalClothesId);
  return c.json({ status: 200, body: content });
};

// get by ethnic id
export const getByEthnicId = async (c: Context) => {
  const ethnicId = Number(c.req.param("ethnicId"));
  const content = await getWearByEthnicID(ethnicId);
  return c.json({ status: 200, body: content });
};

// update by ethnic id
export const updateByEthnicId = async (c: Context) => {
  const ethnicId = Number(c.req.param("ethnicId"));
  const updatedFields = await c.req.json();
  const content = await updateWearByEthnicID(ethnicId, updatedFields);
  return c.json({ status: 200, body: content });
};

// update by traditional clothes id
export const updateByTraditionalClothesId = async (c: Context) => {
  const traditionalClothesId = Number(c.req.param("traditionalClothesId"));
  const updatedFields = await c.req.json();
  const content = await updateWearByTraditionalClothesID(traditionalClothesId, updatedFields);
  return c.json({ status: 200, body: content });
};

// delete by traditional clothes id
export const deleteByTraditionalClothesId = async (c: Context) => {
  const traditionalClothesId = Number(c.req.param("traditionalClothesId"));
  const content = await getWearByTraditionalClothesID(traditionalClothesId);
  await deleteArtifactByTraditionalClothesId(traditionalClothesId);
  return c.json({ status: 200, body: content });
};

// delete by ethnic id
export const deleteByEthnicId = async (c: Context) => {
  const ethnicId = Number(c.req.param("ethnicId"));
  const content = await getWearByEthnicID(ethnicId);
  await deleteArtifactByEthnicId(ethnicId);
  return c.json({ status: 200, body: content });
};
