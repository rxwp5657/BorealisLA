export type Vec2 = [number, number]

export function create(x: number, y: number): Vec2 {
    return [x, y]
}

export function add(a: Vec2, b: Vec2) : Vec2 {
    return [a[0] + b[0], a[1] + b[1]]
}

export function substract(a: Vec2, b: Vec2) : Vec2 {
    return [a[0] - b[0], a[1] - b[1]]
}

export function dot(a: Vec2, b: Vec2): number {
    return a[0] * b[0] + a[1] * b[1]
}

export function multiply(vec: Vec2, s: number) : Vec2 {
    return [vec[0] * s, vec[1] * s]
}

export function divide(vec: Vec2, s: number) : Vec2 {
    return [vec[0] / s, vec[1] / s]
}

export function length(vec: Vec2) : number {
    return Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2))
}

export function normalize(vec: Vec2) : Vec2 {
    return divide(vec, length(vec))
}