import { create as vec3, dot, Vec3 } from "../vector/vec3"
import { det as mat2Det } from "./matrix2"

import { submat } from "./common"

import { EPSILON } from "../utils"

export type Mat3 = [number, number, number, 
                    number, number, number,
                    number, number, number]

export function create(a: number = 1, b: number = 0, c: number = 0, 
                       d: number = 0, e: number = 1, f: number = 0,
                       g: number = 0, h: number = 0, i: number = 1): Mat3 {
    return [a, b, c, 
            d, e, f,
            g, h, i]
}

export function add(a: Mat3, b: Mat3): Mat3 {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2],
            a[3] + b[3], a[4] + b[4], a[5] + b[5],
            a[6] + b[6], a[7] + b[7], a[8] + b[8]]
}

export function sub(a: Mat3, b: Mat3): Mat3 {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2],
            a[3] - b[3], a[4] - b[4], a[5] - b[5],
            a[6] - b[6], a[7] - b[7], a[8] - b[8]]
}

export function scalarMul(a: Mat3, s: number): Mat3 {
    return [a[0] * s, a[1] * s, a[2] * s,
            a[3] * s, a[4] * s, a[5] * s,
            a[6] * s, a[7] * s, a[8] * s]
}

export function det(m: Mat3): number {
    let a = m[0] * m[4] * m[8]
    let b = m[1] * m[5] * m[6]
    let c = m[2] * m[3] * m[7]
    
    let x = m[6] * m[4] * m[2]
    let y = m[7] * m[5] * m[0]
    let z = m[8] * m[3] * m[1]

    return (a + b + c) - (x + y + z)
}

export function transpose(a: Mat3): Mat3{
    return [a[0], a[3], a[6],
            a[1], a[4], a[7],
            a[2], a[5], a[8]]
}

export function matMul(a: Mat3, b: Mat3): Mat3 {
    let r0 = vec3(a[0], a[1], a[2])
    let r1 = vec3(a[3], a[4], a[5])
    let r2 = vec3(a[6], a[7], a[8])

    let c0 = vec3(b[0], b[3], b[6])
    let c1 = vec3(b[1], b[4], b[7])
    let c2 = vec3(b[2], b[5], b[8])

    return [dot(r0, c0), dot(r0, c1), dot(r0, c2),
            dot(r1, c0), dot(r1, c1), dot(r1, c2),
            dot(r2, c0), dot(r2, c1), dot(r2, c2)]
}

export function vecMul(m: Mat3, v: Vec3): Vec3 {
    let r0 = vec3(m[0], m[1], m[2])
    let r1 = vec3(m[3], m[4], m[5])
    let r2 = vec3(m[6], m[7], m[8])

    return vec3(dot(r0, v), dot(r1, v), dot(r2, v))
}

export function inverse(mat: Mat3) : Mat3 {

    let determinant = det(mat)

    if(Math.abs(determinant) < EPSILON) return mat

    let cofactorsMat = create(...mat.map((_, index) => {
        let i = Math.floor(index / 3);
        let j = index % 3;

        return cofactor(mat, i , j)
    }))

    cofactorsMat = transpose(cofactorsMat)

    return scalarMul(cofactorsMat, 1.0 / determinant)
}

function cofactor(m: Mat3, row: number, col: number): number {
    return mat2Det(submat(m, row, col)) * Math.pow(-1, row + col)
}
