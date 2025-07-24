import type { Context } from "hono";
import { createArtifacts } from "../repositories/artifacts.repository.js";
import type { Artifact } from "../types/artifacts.type.js";
import { HashData } from "../utils/hashData.js";
import { contract } from "../libs/web3.js"


export const storeArtifact = async (c : Context) => {
    const body:Artifact = await c.req.json();
    const hash = HashData(body.name ?? " " + body.id);
    const metadata = body;

    // save to db
    await createArtifacts({ ...body, hash})

    // save to block chain (later implemented)
    const tx = await contract.registerArtifact(hash, metadata);
    await tx.wait();

    // return it to frontend
    return c.json({ status : 200, hash : hash})
}

export const getArtifact = async (c : Context) => {
    return c.text("get method successfully run")
}