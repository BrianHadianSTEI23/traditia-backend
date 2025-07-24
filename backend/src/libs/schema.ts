

import { pgTable, text, date, serial } from "drizzle-orm/pg-core";

export const artifacts = pgTable('artifacts',{
    id: serial('id').primaryKey(),
    name : text('name'),
    description : text('description'),
  createdAt: date('createdAt'),
  updatedAt: date('updatedAt'),
    ethnic_group : text('ethnic_group'),
    hash : text('hash')
})