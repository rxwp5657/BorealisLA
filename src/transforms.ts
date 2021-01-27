import { create as mat4, Mat4 } from "./matrix/matrix4"
import { toRadians } from "./utils"

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
