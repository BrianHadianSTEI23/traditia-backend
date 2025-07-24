
import { type InferSelectModel } from "drizzle-orm"
import { traditional_house } from "../libs/schema.js"

export type TraditionalHouse = InferSelectModel<typeof traditional_house>;