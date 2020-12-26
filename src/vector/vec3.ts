export class Vec3 {

    public x: number
    public y: number
    public z: number

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }
}

export function add(a: Vec3, b: Vec3) : Vec3 {
    return new Vec3(a.x + b.x, a.y + b.y, a.z + b.z)
}

export function substract(a: Vec3, b: Vec3) : Vec3 {
    return new Vec3(a.x - b.x, a.y - b.y, a.z - b.z)
}

export function cross(a: Vec3, b: Vec3) : Vec3 {
    return new Vec3(a.y * b.z - a.z * b.y,
                    a.z * b.x - a.x * b.z,
                    a.x * b.y - a.y * b.x)
}

export function dot(a: Vec3, b: Vec3): number {
    return a.x * b.x + a.y * b.y + a.z * b.z
}

export function multiply(vec: Vec3, s: number) : Vec3 {
    return new Vec3(vec.x * s, vec.y * s, vec.z * s)
}

export function divide(vec: Vec3, s: number) : Vec3 {
    return new Vec3(vec.x / s, vec.y / s, vec.z * s)
}

export function length(vec: Vec3) : number {
    return Math.sqrt(Math.pow(vec.x, 2) + 
                        Math.pow(vec.y, 2) + 
                        Math.pow(vec.z, 2))
}

export function normalize(vec: Vec3) : Vec3 {
    return divide(vec, length(vec))
}