import { db } from "../libs/drizzle.js";
import { artifacts } from "../libs/schema.js";
import type { Artifact } from "../types/artifacts.type.js";


export async function createArtifacts(ar:Artifact){
    return db.insert(artifacts).values(ar);
}