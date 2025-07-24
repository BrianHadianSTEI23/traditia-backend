
import { type InferSelectModel } from "drizzle-orm"
import { artifacts_type } from "../libs/schema.js"

export type ArtifactType = InferSelectModel<typeof artifacts_type>;