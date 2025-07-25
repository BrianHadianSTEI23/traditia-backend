

import type { Context } from "hono";
import { createEats, getAllEats, getEatsByEthnicID, getEatsByFoodID, updateEatsByEthnicID, updateEatsByFoodID, deleteEatsByFoodId, deleteEatsByEthnicId } from "../repositories/eats.repository.js";
import type { Eats } from "../types/eats.type.js";
import { getTraditionalFoodByID } from "../repositories/traditional-food.repository.js";

// create
export const create = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { traditional_food_id, ethnic_group_id, ...rest} = body;
        const eat : Eats = {
            traditional_food_id, 
            ethnic_group_id
        }
        await createEats(eat)
        return c.json({ status : 200, body : eat})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get all
export const getAll = async (c : Context) => {
    try {
        const content = await getAllEats();
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get by food id
export const getByFoodId = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { food_id, ...rest}  =body;
        const content = await getEatsByFoodID(food_id);
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
        const content = await getEatsByEthnicID(ethnic_group_id);
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// uupdate by ethnic id
export const updateByEthnicID = async (c : Context) => {
    try {
        const ethnic_group_id = await c.req.param('ethnicId');
        const body  = await c.req.json();
        const content = await updateEatsByEthnicID(Number(ethnic_group_id), body);
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// update by food id
export const updateByFoodID = async (c : Context) => {
    try {
        const food_id = await c.req.param('foodId');
        const body = await c.req.json();
        const content = await updateEatsByFoodID(Number(food_id), body);
        return c.json({ status : 200, body : content});
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// delete by foo id
export const deleteByFoodId = async (c: Context) => {
  try {
    const traditional_food_id = await c.req.param('foodId');
    const body = await c.req.json();

    // 1. Check if ID is provided and is a number
    if (!traditional_food_id || typeof traditional_food_id !== 'number') {
      return c.json({ status: 400, message: 'Invalid or missing ID' }, 400);
    }

    // 2. Check if artifact exists
    const artifact = await getTraditionalFoodByID(traditional_food_id);
    if (!artifact || artifact.length === 0) {
      return c.json({ status: 404, message: 'Food not found' }, 404);
    }

    // 3. Proceed to delete
    await deleteEatsByFoodId(traditional_food_id);

    return c.json({ status: 200, message: 'Artifact deleted successfully', data: artifact });
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
    const artifact = await getEatsByEthnicID(ethnic_group_id);
    if (!artifact || artifact.length === 0) {
      return c.json({ status: 404, message: 'Food not found' }, 404);
    }

    // 3. Proceed to delete
    await deleteEatsByEthnicId(ethnic_group_id);

    return c.json({ status: 200, message: 'Food deleted successfully', data: artifact });
  } catch (error) {
    console.error(error);
    return c.json({ status: 500, message: 'Internal server error' }, 500);
  }
};
