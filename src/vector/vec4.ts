export type Vec4 = [number, number, number, number]

export function create(x: number, y: number, z: number, w: number): Vec4 {
    return [x, y, z, w]
}

export function add(a: Vec4, b: Vec4) : Vec4 {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]]
}

export function substract(a: Vec4, b: Vec4) : Vec4 {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3]]
}

export function dot(a: Vec4, b: Vec4): number {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}

export function multiply(vec: Vec4, s: number) : Vec4 {
    return [vec[0] * s, vec[1] * s, vec[2] * s, vec[3] * s]
}

export function divide(vec: Vec4, s: number) : Vec4 {
    return [vec[0] / s, vec[1] / s, vec[2] / s, vec[3] / s]
}

export function length(vec: Vec4) : number {
    return Math.sqrt(Math.pow(vec[0], 2) +
                     Math.pow(vec[1], 2) +
                     Math.pow(vec[2], 2) + 
                     Math.pow(vec[3], 2))
}

export function normalize(vec: Vec4) : Vec4 {
    return divide(vec, length(vec))
}