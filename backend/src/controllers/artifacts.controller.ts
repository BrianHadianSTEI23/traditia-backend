import type { Context } from "hono";
import { createArtifacts, getAllArtifacts, getArtifactByCreatedDate, getArtifactsById, getArtifactsByHash, updateArtifactByHash, deleteArtifactById } from "../repositories/artifacts.repository.js";
import type { Artifact } from "../types/artifacts.type.js";
import { HashData } from "../utils/hashData.js";
// import { contract } from "../libs/web3.js"

// create artifacts
export const store = async (c : Context) => {
    const body:Artifact = await c.req.json();
    const { name, id, description, createdAt, uploadedBy, hash, type_id} = body;
    const value = HashData(name ?? "" + id + description + createdAt + uploadedBy + hash + type_id);

    // save to db
    await createArtifacts(body)

    // save to block chain (later implemented)
    // const tx = await contract.registerArtifact(value, metadata);
    // await tx.wait();

    // return it to frontend
    return c.json({ status : 200, hash : value})
}

// get all artifacts
export const getAll = async (c : Context) => {
    const artifacts = await getAllArtifacts();
    return c.json( { status : 200, body : artifacts})
}

// get by created date
export const getByCreatedDate = async (c : Context) => {
    const body:Date = await c.req.json();
    const artifacts = await getArtifactByCreatedDate(body);
    return c.json( { status : 200, body : artifacts})
}

// get by hash
export const getByHash = async (c : Context) => {
    const body:string = await c.req.json();
    const artifacts = await getArtifactsByHash(body);
    return c.json( { status : 200, body : artifacts})
}

// update by hash
export const updateByHash = async (c : Context) => {
    const body = await c.req.json();
    const {hash, ...updatedFields} = (body);

    // throw to repo
    if (!hash) {
        return c.json( { status : 400, message: "missing hash"}, 400)
    }

    const updated = await updateArtifactByHash(hash, updatedFields);
    return c.json( { status : 200, body : updated})
}

// delete by id
export const deleteById = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id } = body;

    // 1. Check if ID is provided and is a number
    if (!id || typeof id !== 'number') {
      return c.json({ status: 400, message: 'Invalid or missing ID' }, 400);
    }

    // 2. Check if artifact exists
    const artifact = await getArtifactsById(id);
    if (!artifact || artifact.length === 0) {
      return c.json({ status: 404, message: 'Artifact not found' }, 404);
    }

    // 3. Proceed to delete
    await deleteArtifactById(id);

    return c.json({ status: 200, message: 'Artifact deleted successfully', data: artifact });
  } catch (error) {
    console.error(error);
    return c.json({ status: 500, message: 'Internal server error' }, 500);
  }
};

