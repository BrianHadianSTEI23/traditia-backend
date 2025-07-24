
import { type InferSelectModel } from "drizzle-orm"
import { traditional_food } from "../libs/schema.js"

export type TraditionalFood = InferSelectModel<typeof traditional_food>;