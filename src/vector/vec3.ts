export type Vec3 = [number, number, number]

export function create(x: number, y: number, z: number): Vec3 {
    return [x, y, z]
}

export function add(a: Vec3, b: Vec3) : Vec3 {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
}

export function substract(a: Vec3, b: Vec3) : Vec3 {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
}

export function cross(a: Vec3, b: Vec3) : Vec3 {
    return [a[1] * b[2] - a[2] * b[1],
            a[2] * b[0] - a[0] * b[2],
            a[0] * b[1] - a[1] * b[0]]
}

export function dot(a: Vec3, b: Vec3): number {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

export function multiply(vec: Vec3, s: number) : Vec3 {
    return [vec[0] * s, vec[1] * s, vec[2] * s]
}

export function divide(vec: Vec3, s: number) : Vec3 {
    return [vec[0] / s, vec[1] / s, vec[2] / s]
}

export function length(vec: Vec3) : number {
    return Math.sqrt(Math.pow(vec[0], 2) +
                     Math.pow(vec[1], 2) +
                     Math.pow(vec[2], 2))
}

export function normalize(vec: Vec3) : Vec3 {
    return divide(vec, length(vec))
}