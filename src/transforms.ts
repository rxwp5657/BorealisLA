import { transpose } from "./matrix/matrix"
import { create as mat4, matMul, Mat4 } from "./matrix/matrix4"
import { toRadians } from "./utils"
import * as vec4 from "./vector/vec4"

export function translation(x: number, y: number, z: number): Mat4 {
    return mat4(1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                  x,   y,   z, 1.0)
}

export function scale(x: number, y: number, z: number): Mat4 {
    return mat4(  x, 0.0, 0.0, 0.0,
                0.0,   y, 0.0, 0.0,
                0.0, 0.0,   z, 0.0,
                0.0, 0.0, 0.0, 1.0)
}

export function rotationX(degrees: number): Mat4 {
    
    const rad = toRadians(degrees)

    return mat4(Math.cos(rad), Math.sin(rad), 0.0, 0.0,
               -Math.sin(rad), Math.cos(rad), 0.0, 0.0,
                   0.0,            0.0,       1.0, 0.0,
                   0.0,            0.0,       0.0, 1.0)
}

export function rotationY(degrees: number): Mat4 {

    const rad = toRadians(degrees)
    
    return mat4(Math.cos(rad), 0.0,-Math.sin(rad), 0.0,
                   0.0,        1.0,    0.0,        0.0,
                Math.sin(rad), 0.0, Math.cos(rad), 0.0,
                   0.0,        0.0,    0.0,        1.0)
}

export function rotationZ(degrees: number): Mat4 {

    const rad = toRadians(degrees)

    return mat4(1.0,    0.0,           0.0,        0.0,
                0.0, Math.cos(rad), Math.sin(rad), 0.0,
                0.0,-Math.sin(rad), Math.cos(rad), 0.0,
                0.0,    0.0,           0.0,        1.0)
}

export function lookAt(position: vec4.Vec4, target: vec4.Vec4, up: vec4.Vec4): Mat4 {

    const f = vec4.normalize(vec4.substract(position, target))
    const l = vec4.normalize(vec4.cross(up, f))
    const u = vec4.cross(f, l)

    const invT = translation(-position[0], -position[1], -position[2])

    const invR = mat4(l[0], u[0], f[0], 0,
                      l[1], u[1], f[1], 0,
                      l[2], u[2], f[2], 0,
                        0,    0,    0,  1)

    return matMul(invR, invT)
}

export function ortho(l: number, r: number, b: number, t: number, n: number, f: number) : Mat4 {

    const x = 2.0 / (r - l)
    const y = 2.0 / (t - b)
    const z = 2.0 / (f - n)

    const rl = (r + l) / (r - l)
    const tb = (t + b) / (t - b)
    const fn = (f + n) / (f - n)
    
    const p = mat4(  x, 0.0, 0.0, 0.0,
                   0.0,   y, 0.0, 0.0,
                   0.0, 0.0,   z, 0.0,
                    rl,  tb,  fn, 1.0)

    return p
}

export function perspective(fov: number, a: number, n: number, f: number): Mat4 {
    
    const c = 1.0 / (Math.tan(toRadians(fov) / 2.0))

    const x = -((f + n) / (f - n))
    const y = -((2 * f * n) / (f - n))

    const p = mat4(c/a, 0.0, 0.0, 0.0,
                   0.0,   c, 0.0, 0.0,
                   0.0, 0.0,   x,-1.0,
                   0.0, 0.0,   y, 0.0)

    return p
}
