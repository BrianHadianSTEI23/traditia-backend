
import { createHash } from "crypto"

export function HashData(param:string) {
    return createHash('sha256').update(param).digest('hex');
}