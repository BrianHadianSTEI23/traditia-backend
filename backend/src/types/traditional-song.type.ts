
import { type InferSelectModel } from "drizzle-orm"
import { traditional_song } from "../libs/schema.js"

export type TraditionalSong = InferSelectModel<typeof traditional_song>;