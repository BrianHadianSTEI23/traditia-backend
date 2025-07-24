import { db } from "../libs/drizzle.js";
import { language } from "../libs/schema.js";
import type { Language } from "../types/language.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id, get by name
 * u : update by id
 * d : delete by id
 */

// c
export async function createLanguage(f: Language){
    return db.insert(language).values(f);
}

// r : get all
export async function getAllLanguage() {
    return db.select().from(language);
}

// r : get by hash
export async function getByLanguageByID(id:number){
    return db.select().from(language).where(eq(language.id, id));
}

// r : get b date created at
export async function getLanguageByName(name : string){
    return db.select().from(language).where(eq(language.name, name))
}

// u : update by hash
export async function updateLanguageById(id: number, updatedFields: Partial<typeof language.$inferInsert>) {
  return db
    .update(language)
    .set(updatedFields)
    .where(eq(language.id, id));
}


// d : delete by name
export async function deleteById(id : number){
    return db.delete(language).where(eq(language.id, id))
}


