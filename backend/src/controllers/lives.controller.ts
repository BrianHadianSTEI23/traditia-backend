

import type { Context } from "hono";
import { createLives, getAllLives, getLivesByEthnicID, getLivesByTraditionalHouseID, updateLivesByEthnicID, updateLivesByTraditionalHouseID, deleteLivesByTraditionalHouseId, deleteLivesByEthnicId } from "../repositories/lives.repository.js";
import type { Lives } from "../types/lives.type.js";
import { getTraditionalHouseByID } from "../repositories/traditional-house.repository.js";

// create
export const create = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { traditional_house_id, ethnic_group_id, ...rest} = body;
        const eat : Lives = {
            traditional_house_id, 
            ethnic_group_id
        }
        await createLives(eat)
        return c.json({ status : 200, body : eat})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get all
export const getAll = async (c : Context) => {
    try {
        const content = await getAllLives();
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get by food id
export const getByTraditionalHouseId = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { traditional_house_id, ...rest}  =body;
        const content = await getLivesByTraditionalHouseID(traditional_house_id);
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get by ethnic id
export const getByEthnicId = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { ethnic_group_id, ...rest}  =body;
        const content = await getLivesByEthnicID(ethnic_group_id);
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// uupdate by ethnic id
export const updateByEthnicID = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { ethnic_group_id, ...rest}  =body;
        const content = await updateLivesByEthnicID(ethnic_group_id, rest);
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// update by food id
export const updateByTraditionalHouseID = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { traditional_house_id, ...rest}  =body;
        const content = await updateLivesByTraditionalHouseID(traditional_house_id, rest);
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// delete by foo id
export const deleteByTranditionalHouseId = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { traditional_house_id } = body;

    // 1. Check if ID is provided and is a number
    if (!traditional_house_id || typeof traditional_house_id !== 'number') {
      return c.json({ status: 400, message: 'Invalid or missing ID' }, 400);
    }

    // 2. Check if artifact exists
    const artifact = await getTraditionalHouseByID(traditional_house_id);
    if (!artifact || artifact.length === 0) {
      return c.json({ status: 404, message: 'House not found' }, 404);
    }

    // 3. Proceed to delete
    await deleteLivesByTraditionalHouseId(traditional_house_id);

    return c.json({ status: 200, message: 'Lives deleted successfully', data: artifact });
  } catch (error) {
    console.error(error);
    return c.json({ status: 500, message: 'Internal server error' }, 500);
  }
};

// delete by id
export const deleteByEthnicId = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { ethnic_group_id } = body;

    // 1. Check if ID is provided and is a number
    if (!ethnic_group_id || typeof ethnic_group_id !== 'number') {
      return c.json({ status: 400, message: 'Invalid or missing ID' }, 400);
    }

    // 2. Check if artifact exists
    const artifact = await getLivesByEthnicID(ethnic_group_id);
    if (!artifact || artifact.length === 0) {
      return c.json({ status: 404, message: 'Ethnic not found' }, 404);
    }

    // 3. Proceed to delete
    await deleteLivesByEthnicId(ethnic_group_id);

    return c.json({ status: 200, message: 'Lives deleted successfully', data: artifact });
  } catch (error) {
    console.error(error);
    return c.json({ status: 500, message: 'Internal server error' }, 500);
  }
};
