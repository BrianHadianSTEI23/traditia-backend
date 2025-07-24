import type { Context } from "hono";
import { createArtifacts, getAllArtifacts } from "../repositories/artifacts.repository.js";
import type { Artifact } from "../types/artifacts.type.js";
import { HashData } from "../utils/hashData.js";
// import { contract } from "../libs/web3.js"

// 


export const store = async (c : Context) => {
    const body:Artifact = await c.req.json();
    const hash = HashData(body.name ?? " " + body.id);
    const metadata = body;

    // save to db
    await createArtifacts({ ...body, hash})

    // save to block chain (later implemented)
    // const tx = await contract.registerArtifact(hash, metadata);
    // await tx.wait();

    // return it to frontend
    return c.json({ status : 200, hash : hash})
}

export const getAll = async (c : Context) => {
    const artifacts = await getAllArtifacts();
    return c.json( { status : 200, body : artifacts})
}
