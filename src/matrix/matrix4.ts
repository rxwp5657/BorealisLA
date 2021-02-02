import { create as vec4, dot, Vec4 } from "../vector/vec4"
import { det as mat3Det } from "./matrix3"
import { submat } from "./common"

import { EPSILON } from "../commons"

export type Mat4 = [number, number, number, number,
                    number, number, number, number,
                    number, number, number, number,
                    number, number, number, number]

export function create(a: number = 1, b: number = 0, c: number = 0, d: number = 0,
                       e: number = 0, f: number = 1, g: number = 0, h: number = 0,
                       i: number = 0, j: number = 0, k: number = 1, l: number = 0,
                       m: number = 0, n: number = 0, o: number = 0, p: number = 1): Mat4 {
    return [a, b, c, d,
            e, f, g, h,
            i, j, k, l,
            m, n, o, p]
}

export function add(a: Mat4, b: Mat4): Mat4 {
    return [a[0]  + b[0],  a[1]  + b[1],  a[2]  + b[2],  a[3]  + b[3],
            a[4]  + b[4],  a[5]  + b[5],  a[6]  + b[6],  a[7]  + b[7],
            a[8]  + b[8],  a[9]  + b[9],  a[10] + b[10], a[11] + b[11],
            a[12] + b[12], a[13] + b[13], a[14] + b[14], a[15] + b[15]]
}

export function sub(a: Mat4, b: Mat4): Mat4 {
    return [a[0]  - b[0],  a[1]  - b[1],  a[2]  - b[2],  a[3]  - b[3],
            a[4]  - b[4],  a[5]  - b[5],  a[6]  - b[6],  a[7]  - b[7],
            a[8]  - b[8],  a[9]  - b[9],  a[10] - b[10], a[11] - b[11],
            a[12] - b[12], a[13] - b[13], a[14] - b[14], a[15] - b[15]]
}

export function scalarMul(a: Mat4, s: number): Mat4 {
    return [a[0]  * s, a[1]  * s, a[2]  * s, a[3]  * s,
            a[4]  * s, a[5]  * s, a[6]  * s, a[7]  * s,
            a[8]  * s, a[9]  * s, a[10] * s, a[11] * s,
            a[12] * s, a[13] * s, a[14] * s, a[15] * s]
}

export function det(m: Mat4): number {

    let result = 0

    for(let i = 0; i < 4; i++) {
        let cf = cofactor(m, 0, i)
        result += cf * m[i]
    }

    return result;
}

export function transpose(a: Mat4): Mat4{
    return [a[0], a[4], a[8], a[12],
            a[1], a[5], a[9], a[13],
            a[2], a[6], a[10],a[14],
            a[3], a[7], a[11],a[15]]
}

export function matMul(a: Mat4, b: Mat4): Mat4 {
    let r0 = vec4(a[0], a[1], a[2], a[3])
    let r1 = vec4(a[4], a[5], a[6], a[7])
    let r2 = vec4(a[8], a[9], a[10],a[11])
    let r3 = vec4(a[12],a[13],a[14],a[15])
    
    let c0 = vec4(b[0], b[4], b[8], b[12])
    let c1 = vec4(b[1], b[5], b[9], b[13])
    let c2 = vec4(b[2], b[6], b[10],b[14])
    let c3 = vec4(b[3], b[7], b[11],b[15])

    return [dot(r0, c0), dot(r0, c1), dot(r0, c2), dot(r0, c3),
            dot(r1, c0), dot(r1, c1), dot(r1, c2), dot(r1, c3),
            dot(r2, c0), dot(r2, c1), dot(r2, c2), dot(r2, c3),
            dot(r3, c0), dot(r3, c1), dot(r3, c2), dot(r3, c3)]
}

export function vecMul(v: Vec4, m: Mat4): Vec4 {

    let c0 = vec4(m[0], m[4], m[8], m[12])
    let c1 = vec4(m[1], m[5], m[9], m[13])
    let c2 = vec4(m[2], m[6], m[10],m[14])
    let c3 = vec4(m[3], m[7], m[11],m[15])

    return vec4(dot(v, c0), dot(v, c1), dot(v, c2), dot(v, c3))
}

export function inverse(mat: Mat4) : Mat4 {

    let determinant = det(mat)

    if(Math.abs(determinant) < EPSILON) return mat

    let cofactorsMat = create(...mat.map((_, index) => {
        let i = Math.floor(index / 4)
        let j = index % 4

        return cofactor(mat, i , j)
    }))

    cofactorsMat = transpose(cofactorsMat)

    return scalarMul(cofactorsMat, 1.0 / determinant)
}

function cofactor(m: Mat4, row: number, col: number): number {
    return mat3Det(submat(m, row, col)) * Math.pow(-1, row + col)
}
