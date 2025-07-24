
import { type InferSelectModel } from "drizzle-orm"
import { ethnic_group } from "../libs/schema.js"

export type EthnicGroup = InferSelectModel<typeof ethnic_group>;