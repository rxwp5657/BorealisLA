import * as mat2 from "./matrix2"
import * as mat3 from "./matrix3"
import * as mat4 from "./matrix4"

import { Vec2 } from "../vector/vec2"
import { Vec3 } from "../vector/vec3"
import { Vec4 } from "../vector/vec4"

import { funcMapper } from "../utils"

export function add(a: mat2.Mat2, b: mat2.Mat2, ...rest: mat2.Mat2[]): mat2.Mat2;
export function add(a: mat3.Mat3, b: mat3.Mat3, ...rest: mat3.Mat3[]): mat3.Mat3;
export function add(a: mat4.Mat4, b: mat4.Mat4, ...rest: mat4.Mat4[]): mat4.Mat4;
export function add(a: number[],  b: number[],  ...rest: number[][]): number[] {

    const mapper: funcMapper = {
        4  : mat2.add,
        9  : mat3.add,
        16 : mat4.add,
    }

    const func = mapper[a.length]
    const result = func(a, b)

    return rest.reduce((acc, mat) => func(acc, mat), result)
}

export function sub(a: mat2.Mat2, b: mat2.Mat2, ...rest: mat2.Mat2[]): mat2.Mat2;
export function sub(a: mat3.Mat3, b: mat3.Mat3, ...rest: mat3.Mat3[]): mat3.Mat3;
export function sub(a: mat4.Mat4, b: mat4.Mat4, ...rest: mat4.Mat4[]): mat4.Mat4;
export function sub(a: number[],  b: number[],  ...rest: number[][]): number[] {
    
    const mapper: funcMapper = {
        4  : mat2.sub,
        9  : mat3.sub,
        16 : mat4.sub,
    }

    const func = mapper[a.length]
    const result = func(a, b)

    return rest.reduce((acc, mat) => func(acc, mat), result)
}

export function mul(a: mat2.Mat2, b: mat2.Mat2, ...rest: mat2.Mat2[]): mat2.Mat2;
export function mul(a: mat3.Mat3, b: mat3.Mat3, ...rest: mat3.Mat3[]): mat3.Mat3;
export function mul(a: mat4.Mat4, b: mat4.Mat4, ...rest: mat4.Mat4[]): mat4.Mat4;
export function mul(a: number[],  b: number[], ...rest: number[][]): number[] {
    
    const mapper: funcMapper = {
        4  : mat2.matMul,
        9  : mat3.matMul,
        16 : mat4.matMul,
    }

    const func = mapper[a.length]
    const result = func(a, b)

    return rest.reduce((acc, mat) => func(acc, mat), result)
}

export function vecMul(mat: mat2.Mat2, vec: Vec2): Vec2;
export function vecMul(mat: mat3.Mat3, vec: Vec3): Vec3;
export function vecMul(mat: mat4.Mat4, vec: Vec4): Vec4;
export function vecMul(mat: number[],  vec: number[]): number[] {

    const mapper: funcMapper = {
        4  : mat2.vecMul,
        9  : mat3.vecMul,
        16 : mat4.vecMul,
    }

    return mapper[mat.length](mat, vec)
}

export function scalarMul(mat: mat2.Mat2, s: number): mat2.Mat2;
export function scalarMul(mat: mat3.Mat3, s: number): mat3.Mat3;
export function scalarMul(mat: mat4.Mat4, s: number): mat4.Mat4;
export function scalarMul(mat: number[],  s: number): number[] {transpose
    
    const mapper: funcMapper = {
        4  : mat2.scalarMul,
        9  : mat3.scalarMul,
        16 : mat4.scalarMul,
    }

    return mapper[mat.length](mat, s)
}

export function det(mat: mat2.Mat2): number;
export function det(mat: mat3.Mat3): number;
export function det(mat: mat4.Mat4): number;
export function det(mat: number[]): number {

    const mapper: funcMapper = {
        4  : mat2.det,
        9  : mat3.det,
        16 : mat4.det,
    }

    return mapper[mat.length](mat)
}

export function transpose(mat: mat2.Mat2): mat2.Mat2;
export function transpose(mat: mat3.Mat3): mat3.Mat3;
export function transpose(mat: mat4.Mat4): mat4.Mat4;
export function transpose(mat: number[]): number[] {

    const mapper: funcMapper = {
        4  : mat2.transpose,
        9  : mat3.transpose,
        16 : mat4.transpose,
    }

    return mapper[mat.length](mat)
}

export function inverse(mat: mat2.Mat2): mat2.Mat2;
export function inverse(mat: mat3.Mat3): mat3.Mat3;
export function inverse(mat: mat4.Mat4): mat4.Mat4;
export function inverse(mat: number[]): number[] {

    const mapper: funcMapper = {
        4  : mat2.inverse,
        9  : mat3.inverse,
        16 : mat4.inverse,
    }

    return mapper[mat.length](mat)
}
