
import type { Context } from "hono";
import { createEthnicGroup, getAllEthnicGroup, getByEthnicGroupByName, getEthnicGroupByRegionID, updateEthnicGroupByName, updateEthnicGroupByRegionID, 
    deleteEthnicGroupByName
 } from "../repositories/ethnic-group.repository.js";
import type { EthnicGroup } from "../types/ethnic-group.type.js";


// create by ethnic group
export const create = async (c : Context) => {
    try {
        const body = await c.req.json();
        const { id, name, description, region_id, ...rest} = body;
        const eg: EthnicGroup = {
            id : id , 
            name : name,
            description : description, 
            region_id : region_id
        }
        await createEthnicGroup(eg)
        return c.json({ status : 200, body : eg})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get all
export const getAll = async (c : Context) => {
    try {
        const content = await getAllEthnicGroup();
        return c.json( { status : 200, body : content})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get by name
export const getByName = async (c : Context) => {
    try {
        const body = await c.req.json();
        const {name, ...rest} = body;
        const content = await getByEthnicGroupByName(name);
        return c.json( { status : 200, body : content})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// get by region id
export const getByRegionId = async (c : Context) => {
    try {
        const body = await c.req.json();
        const {regiod_id, ...rest} = body;
        const content = await getEthnicGroupByRegionID(regiod_id);
        return c.json( { status : 200, body : content})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// update by name
export const updateByName = async (c : Context) => {
    try {
        const body = await c.req.json();
        const {name, ...rest} = body;
        const content = await updateEthnicGroupByName(name, rest);
        return c.json( { status : 200, body : content})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// update by region id
export const updateByRegionId = async (c : Context) => {
    try {
        const body = await c.req.json();
        const {region_id, ...rest} = body;
        const content = await updateEthnicGroupByName(region_id, rest);
        return c.json( { status : 200, body : content})
    } catch (error) {
        console.error(error);
        return c.json({ status: 500, message: 'Internal server error' }, 500);
    }
}

// delete by name
export const deleteByName = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { name } = body;

    // 1. Check if name is provided and is a string
    if (!name || typeof name !== 'string') {
      return c.json({ status: 400, message: 'Invalid or missing name' }, 400);
    }

    // 2. Check if ethnic group exists
    const ethnicGroup = await getByEthnicGroupByName(name);
    if (!ethnicGroup || ethnicGroup.length === 0) {
      return c.json({ status: 404, message: 'Ethnic group not found' }, 404);
    }

    // 3. Proceed to delete
    await deleteEthnicGroupByName(name);

    return c.json({ status: 200, message: 'Ethnic group deleted successfully', data: ethnicGroup });
  } catch (error) {
    console.error(error);
    return c.json({ status: 500, message: 'Internal server error' }, 500);
  }
};