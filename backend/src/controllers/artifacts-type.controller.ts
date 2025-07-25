import type { Context } from "hono"
import { createArtifactType, getAllArtifactType, getArtifactTypeById, updateArtifactTypeByID, deleteArtifactTypeById} from "../repositories/artifacts-type.repository.js"

// create type
export const createType = async (c : Context) => {
    const body = await c.req.json();
    const { id, name, ...rest} =body;


    await createArtifactType({
        id : id,
        name :name
    })
    return c.json({ status : 200, body : body})
}

// get all artifact type
export const getAllType = async (c : Context) => {    
    return c.json({ status : 200, body : getAllArtifactType()})
}

// get type by id
export const getTypeById = async (c : Context) => {
    const body = await c.req.json();
    const {id, ...rest} = body;

    const type = getArtifactTypeById(id);


    return c.json( { status : 200, body : type})
}

// update type by id
export const updateTypeById = async (c : Context) => {
    const body = await c.req.json();
    const {id, ...updatedFields} = (body);

    // throw to repo
    if (!id) {
        return c.json( { status : 400, message: "missing id"}, 400)
    }

    const updated = await updateArtifactTypeByID(id, updatedFields);
    return c.json( { status : 200, body : updated})
}

// delete by id
export const deleteTypeById = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id } = body;

    // 1. Check if ID is provided and is a number
    if (!id || typeof id !== 'number') {
      return c.json({ status: 400, message: 'Invalid or missing ID' }, 400);
    }

    // 2. Check if artifact exists
    const artifact = await getArtifactTypeById(id);
    if (!artifact || artifact.length === 0) {
      return c.json({ status: 404, message: 'Artifact type not found' }, 404);
    }

    // 3. Proceed to delete
    await deleteArtifactTypeById(id);

    return c.json({ status: 200, message: 'Artifact type deleted successfully', data: artifact });
  } catch (error) {
    console.error(error);
    return c.json({ status: 500, message: 'Internal server error' }, 500);
  }
};





