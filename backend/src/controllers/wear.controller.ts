

import {
    createWear, getAllWear, getWearByEthnicID, getWearByTraditionalClothesID,
    updateWearByEthnicID, updateWearByTraditionalClothesID, deleteArtifactByEthnicId,
    deleteArtifactByTraditionalClothesId
} from "../repositories/wear.repository.js"
import type { Context } from "hono"

// create wear
export const create = async (c : Context) => {
    const body = await c.req.json();
    const { traditional_clothes_id, ethnic_group_id, ...rest} = body;
    const e = {traditional_clothes_id, ethnic_group_id}
    await createWear(e);
    return c.json( {status : 200, body : e})
}

// get all
export const getAll = async (c : Context) => {
    const content = await getAllWear();
    return c.json( { status : 200, body : content})
}

// get by trad clothes id
export const getByTraditionalClothesId = async (c : Context) => {
    const body = await c.req.json();
    const { traditional_clothes_id, ...rest} = body;
    const content = await getWearByTraditionalClothesID(traditional_clothes_id);
    return c.json({ status : 200, body : content})
}

// get by ethnic id
export const getByEthnicId = async (c : Context) => {
    const body = await c.req.json();
    const { ethnic_group_id, ...rest} = body;
    const content = await getWearByEthnicID(ethnic_group_id);
    return c.json({ status : 200, body : content})
}

// update by ethnic id
export const updateByEthnicId = async (c : Context) => {
    const body = await c.req.json();
    const { ethnic_group_id, ...rest} = body;
    const content = await updateWearByEthnicID(ethnic_group_id, rest);
    return c.json({ status : 200, body : content})
}

// update by trad clothes ids
export const updateByTraditionalClothesId = async (c : Context) => {
    const body = await c.req.json();
    const { traditional_clothes_id, ...rest} = body;
    const content = await updateWearByTraditionalClothesID(traditional_clothes_id, rest);
    return c.json({ status : 200, body : content})
}

// delete by trad clothes id
export const deleteByTraditionalClothesId =async (c : Context) => {
    const body = await c.req.json();
    const { traditional_clothes_id , ...rest} = body;
    const content = await getWearByTraditionalClothesID(traditional_clothes_id);
    await deleteArtifactByTraditionalClothesId(traditional_clothes_id);
    return c.json( { status : 200, body : content})
}

// delete by trad clothes id
export const deleteByEthnicId =async (c : Context) => {
    const body = await c.req.json();
    const { ethnic_group_id , ...rest} = body;
    const content = await getWearByEthnicID(ethnic_group_id);
    await deleteArtifactByEthnicId(ethnic_group_id);
    return c.json( { status : 200, body : content})
}



