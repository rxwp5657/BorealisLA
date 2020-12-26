export class Vec4 {

    public x: number
    public y: number
    public z: number
    public w: number

    constructor(x: number, y: number, z: number, w: number) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }
}

export function add(a: Vec4, b: Vec4) : Vec4 {
    return new Vec4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + a.w)
}

export function substract(a: Vec4, b: Vec4) : Vec4 {
    return new Vec4(a.x - b.x, a.y - b.y, a.z - b.z, a.w - a.w)
}

export function dot(a: Vec4, b: Vec4): number {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * a.w
}

export function multiply(vec: Vec4, s: number) : Vec4 {
    return new Vec4(vec.x * s, vec.y * s, vec.z * s, vec.w * s)
}

export function divide(vec: Vec4, s: number) : Vec4 {
    return new Vec4(vec.x / s, vec.y / s, vec.z * s, vec.w / s)
}

export function length(vec: Vec4) : number {
    return Math.sqrt(Math.pow(vec.x, 2) + 
                        Math.pow(vec.y, 2) + 
                        Math.pow(vec.z, 2) + 
                        Math.pow(vec.w, 2))
}

export function normalize(vec: Vec4) : Vec4 {
    return divide(vec, length(vec))
}
