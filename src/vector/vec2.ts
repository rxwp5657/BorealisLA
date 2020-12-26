export class Vec2 {

    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

export function add(a: Vec2, b: Vec2) : Vec2 {
    return new Vec2(a.x + b.x, a.y + b.y)
}

export function substract(a: Vec2, b: Vec2) : Vec2 {
    return new Vec2(a.x - b.x, a.y - b.y)
}

export function dot(a: Vec2, b: Vec2): number {
    return a.x * b.x + a.y * b.y
}

export function multiply(vec: Vec2, s: number) : Vec2 {
    return new Vec2(vec.x * s, vec.y * s)
}

export function divide(vec: Vec2, s: number) : Vec2 {
    return new Vec2(vec.x / s, vec.y / s)
}

export function length(vec: Vec2) : number {
    return Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2))
}

export function normalize(vec: Vec2) : Vec2 {
    return divide(vec, length(vec))
}