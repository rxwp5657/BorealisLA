import { EPSILON } from "../utils"
import { create as vec2, dot, Vec2 } from "../vector/vec2"

export type Mat2 = [number, number, 
                    number, number]

export function create(a: number = 1, b: number = 0, c: number = 0, d: number = 1): Mat2 {
    return [a, b, c, d]
}

export function add(a: Mat2, b: Mat2): Mat2 {
    return [a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3]]
}

export function sub(a: Mat2, b: Mat2): Mat2 {
    return [a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3]]
}

export function scalarMul(mat: Mat2, s: number): Mat2 {
    return [mat[0] * s, mat[1] * s,
            mat[2] * s, mat[3] * s]
}

export function det(mat: Mat2): number {
    return mat[0] * mat[3] - mat[1] * mat[2]
}

export function transpose(mat: Mat2): Mat2 {
    return [mat[0], mat[2], mat[1], mat[3]]
}

export function matMul(a: Mat2, b: Mat2): Mat2 {

    let r0 = vec2(a[0], a[1])
    let r1 = vec2(a[2], a[3])

    let c0 = vec2(b[0], b[2])
    let c1 = vec2(b[1], b[3])

    return [dot(r0, c0), dot(r0, c1),
            dot(r1, c0), dot(r1, c1)]
}

export function vecMul(mat: Mat2, v: Vec2): Vec2 {

    let r0 = vec2(mat[0], mat[1])
    let r1 = vec2(mat[2], mat[3])

    return vec2(dot(r0, v), dot(r1, v))
}

export function inverse(mat: Mat2) : Mat2 {

    let determinant = det(mat)

    if(Math.abs(determinant) < EPSILON) return mat

    return scalarMul(create(mat[3], -mat[1], -mat[2], mat[0]), 1.0 / determinant)
}