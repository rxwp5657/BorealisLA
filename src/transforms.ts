import { create as mat4, matMul, Mat4 } from "./matrix/matrix4"
import { toRadians } from "./utils"
import * as vec4 from "./vector/vec4"

export function translation(x: number, y: number, z: number): Mat4 {
    return mat4(1.0, 0.0, 0.0, x,
                0.0, 1.0, 0.0, y,
                0.0, 0.0, 1.0, z,
                0.0, 0.0, 0.0,1.0)
}

export function scale(x: number, y: number, z: number): Mat4 {
    return mat4(  x, 0.0, 0.0, 0.0,
                0.0,   y, 0.0, 0.0,
                0.0, 0.0,   z, 0.0,
                0.0, 0.0, 0.0, 1.0)
}

export function roationX(degrees: number): Mat4 {
    
    const rad = toRadians(degrees)
    
    return mat4(Math.cos(rad), -Math.sin(rad), 0.0, 0.0,
                Math.sin(rad),  Math.cos(rad), 0.0, 0.0,
                   0.0,            0.0,        1.0, 0.0,
                   0.0,            0.0,        0.0, 1.0)
}

export function roationY(degrees: number): Mat4 {

    const rad = toRadians(degrees)

    return mat4(Math.cos(rad), 0.0, Math.sin(rad), 0.0,
                   0.0,        1.0,    0.0,        0.0,
               -Math.sin(rad), 0.0, Math.cos(rad), 0.0,
                   0.0,        0.0,    0.0,        1.0)
}

export function roationZ(degrees: number): Mat4 {

    const rad = toRadians(degrees)

    return mat4(1.0,    0.0,           0.0,        0.0,
                0.0, Math.cos(rad),-Math.sin(rad), 0.0,
                0.0, Math.sin(rad), Math.cos(rad), 0.0,
                0.0,    0.0,           0.0,        1.0)
}

export function lookAt(position: vec4.Vec4, target: vec4.Vec4, up: vec4.Vec4): Mat4 {
    
    const f = vec4.normalize(vec4.substract(position, target))
    const l = vec4.normalize(vec4.cross(up, f))
    const u = vec4.cross(f, l)

    const invT = translation(-position[0], -position[1], -position[2])
    const invR = mat4(l[0], l[1], l[2], 0,
                      u[0], u[1], u[2], 0,
                      f[0], f[1], f[2], 0,
                        0,    0,    0,  1)

    return matMul(invR, invT)
}
