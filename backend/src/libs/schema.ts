

import { pgTable, text, date, serial } from "drizzle-orm/pg-core";

// artifacts
export const artifacts = pgTable('artifacts',{
    id: serial('id').primaryKey(),
    name : text('name'),
    description : text('description'),
    createdAt: date('createdAt'),
    uploadedBy: serial('id').references(() => user.id),
    hash : text('hash').primaryKey(),
    type_id : serial('id').references(() => artifacts_type.id)
  })

export const artifacts_type = pgTable('artifacts_type', {
  id: serial('id').primaryKey(),
  name : text('name'),
})
  
// traditional-class
export const traditional_class = pgTable('traditional_class',{
    id: serial('id').primaryKey(),
    name : text('name'),
    description : text('description'),
})

// tradition
export const tradition = pgTable('tradition',{
    id: serial('id').primaryKey(),
    name : text('name'),
    description : text('description'),
    period : text('period')
})

// region
export const region = pgTable('region',{
    id: serial('id').primaryKey(),
    name : text('name')
})

// folklore
export const folklore = pgTable('folklore',{
    id: serial('id').primaryKey(),
    name : text('name'),
    text : text('description'),
    author: text('author'),
    ethnic_group_id : serial('ethnic_group_id').references(() => ethnic_group.id),
})

// traditional dance
export const traditional_dance = pgTable('traditional_dance', {
    id: serial('id').primaryKey(),
    name : text('name'),
    description : text('description'),
    ethnic_group_id : serial('ethnic_group_id').references(() => ethnic_group.id),
})

// ethnic group 
export const ethnic_group = pgTable('ethnic_group', {
    id: serial('id').primaryKey(),
    name : text('name'),
    description : text('description'),
    region_id : serial('ethnic_group_id').references(() => region.id)
})

// user
export const user = pgTable('user', {
  id : serial('id').primaryKey(),
  name: text('name'),
  email : text('email'),
  password : text('password')
})

// language
export const language = pgTable('language', {
  id : serial('id').primaryKey(),
  name: text('name'),
})

// speaks
export const speaks = pgTable('speaks', {
  language_id : serial('language_id').primaryKey().references(() => language.id),
  ethnic_group_id: serial('ethnic_group_id').primaryKey().references(() => ethnic_group.id)
})

// traditional clothes
export const traditional_clothes = pgTable('traditional_clothes', {
  id : serial('id').primaryKey(),
  name: text('name'),
  period : text('period')
})

// wear
export const wear = pgTable('wear', {
  traditional_clothes_id : serial('language_id').primaryKey().references(() => traditional_clothes.id),
  ethnic_group_id: serial('ethnic_group_id').primaryKey().references(() => ethnic_group.id)
})

// traditional_food
export const traditional_food = pgTable('traditional_food', {
  id : serial('id').primaryKey(),
  name: text('name'),
})

// eats
export const eats = pgTable('eats', {
  traditional_food_id : serial('traditional_food_id').primaryKey().references(() => traditional_food.id),
  ethnic_group_id: serial('ethnic_group_id').primaryKey().references(() => ethnic_group.id)
})


// traditional_song
export const traditional_song = pgTable('traditional_song', {
  id : serial('id').primaryKey(),
  name: text('name'),
})

// sing
export const sings = pgTable('sings', {
  traditional_song_id : serial('traditional_song_id').primaryKey().references(() => traditional_song.id),
  ethnic_group_id: serial('ethnic_group_id').primaryKey().references(() => ethnic_group.id)
})

// traditional_house
export const traditional_house = pgTable('traditional_house', {
  id : serial('id').primaryKey(),
  name: text('name'),
})

// lives
export const lives = pgTable('lives',{
  traditional_house_id : serial('traditional_house_id').primaryKey().references(() => traditional_house.id),
  ethnic_group_id: serial('ethnic_group_id').primaryKey().references(() => ethnic_group.id)
})

// landmark
export const landmark = pgTable('landmark', {
  id : serial('id').primaryKey(),
  name: text('name'),
  description : text('description'),
  history : text('history'),
  region_id : serial('region_id').references(() => region.id)
})


