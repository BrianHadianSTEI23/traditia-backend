
import { type InferSelectModel } from "drizzle-orm"
import { traditional_clothes } from "../libs/schema.js"

export type TraditionalClothes = InferSelectModel<typeof traditional_clothes>;