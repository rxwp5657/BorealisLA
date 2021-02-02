import { EPSILON } from "./commons"
 
export function isEqual(a: number[], b: number[]): boolean {

    if(a.length !== b.length) return false;

    for(let i = 0; i < a.length; i++) {
        if(Math.abs(a[i] - b[i]) > EPSILON){
            return false
        }
    }

    return true
}

export function toRadians(degrees: number): number {
    return (Math.PI * degrees) / 180.0
}

export function toDegrees(radians: number): number {
    return (180.0 * radians) / Math.PI
}
