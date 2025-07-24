import { db } from "../libs/drizzle.js";
import { user } from "../libs/schema.js";
import type { User } from "../types/user.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, email
 * u : update by food_id, email
 * d : delete by food_id, email
 */

// c
export async function createUser(e:User){
    return db.insert(user).values(e);
}

// r : get all
export async function getAllUser() {
    return db.select().from(user);
}

// r : get by food id
export async function getUserByID(id:number){
    return db.select().from(user).where(eq(user.id, id));
}

// r : get by food id
export async function getUserByEmail(e: string){
    return db.select().from(user).where(eq(user.email, e));
}

// u : update by hash
export async function updateUserByID(id: number, updatedFields: Partial<typeof user.$inferInsert>) {
    return db
    .update(user)
    .set(updatedFields)
    .where(eq(user.id, id));
}

// u : update by hash
export async function updateUserByEmail(email: string, updatedFields: Partial<typeof user.$inferInsert>) {
    return db
    .update(user)
    .set(updatedFields)
    .where(eq(user.email, email));
}

// d : delete by id
export async function deleteUserById(id : number){
    return db.delete(user).where(eq(user.id, id))
}

// d : delete by id
export async function deleteUserByEmail(email : string){
    return db.delete(user).where(eq(user.email, email))
}
