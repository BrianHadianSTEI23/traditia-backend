// ✅ With postgres-js
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

console.log("Connecting to DB:", process.env.DATABASE_URL);
const client = postgres(process.env.DATABASE_URL!, { ssl: 'require' })
export const db = drizzle(client)
