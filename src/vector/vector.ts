import * as vec2 from "./vec2"
import * as vec3 from "./vec3"
import * as vec4 from "./vec4"

import { funcMapper, EPSILON} from "../utils"

export function length(vec: vec2.Vec2) : number;
export function length(vec: vec3.Vec3) : number;
export function length(vec: vec4.Vec4) : number;
export function length(vec: number[]) : number {

    let vecDim = vec.length

    const lenghtMap: funcMapper = {
        2: vec2.length,
        3: vec3.length,
        4: vec4.length
    }

    return lenghtMap[vecDim](vec)
}

export function multiply(vec: vec2.Vec2, s: number) : vec2.Vec2;
export function multiply(vec: vec3.Vec3, s: number) : vec3.Vec3;
export function multiply(vec: vec4.Vec4, s: number) : vec4.Vec4;
export function multiply(vec: number[], s: number) : number[] {

    let vecDim = vec.length
    
    const multiplyMap: funcMapper = {
        2: vec2.multiply,
        3: vec3.multiply,
        4: vec4.multiply
    }
    
    return multiplyMap[vecDim](vec, s)
}

export function divide(vec: vec2.Vec2, s: number) : vec2.Vec2;
export function divide(vec: vec3.Vec3, s: number) : vec3.Vec3;
export function divide(vec: vec4.Vec4, s: number) : vec4.Vec4;
export function divide(vec: number[], s: number) : number[] {

    let vecDim = vec.length
    
    const divideMap: funcMapper = {
        2: vec2.divide,
        3: vec3.divide,
        4: vec4.divide
    }
    
    return divideMap[vecDim](vec, s)
}

export function normalize(vec: vec2.Vec2) : vec2.Vec2;
export function normalize(vec: vec3.Vec3) : vec3.Vec3;
export function normalize(vec: vec4.Vec4) : vec4.Vec4;
export function normalize(vec: number[]) : number[] {

    let vecDim = vec.length

    const normalMap: funcMapper = {
        2: vec2.normalize,
        3: vec3.normalize,
        4: vec4.normalize
    }

    return normalMap[vecDim](vec)    
}

export function dot(a: vec2.Vec2, b: vec2.Vec2) : number;
export function dot(a: vec3.Vec3, b: vec3.Vec3) : number;
export function dot(a: vec4.Vec4, b: vec4.Vec4) : number;
export function dot(a: number[], b: number[]) : number {

    let aDim = a.length
    let bDim = b.length

    const dotMap: funcMapper = {
        2: vec2.dot,
        3: vec3.dot,
        4: vec4.dot
    }

    return dotMap[aDim](a, b)    
}

export function add(a: vec2.Vec2, b: vec2.Vec2) : vec2.Vec2;
export function add(a: vec3.Vec3, b: vec3.Vec3) : vec3.Vec3;
export function add(a: vec4.Vec4, b: vec4.Vec4) : vec4.Vec4;
export function add(a: number[], b: number[]) : number[] {

    let aDim = a.length
    let bDim = b.length

    const addMap: funcMapper = {
        2: vec2.add,
        3: vec3.add,
        4: vec4.add
    }

    return addMap[aDim](a, b)    
}

export function sub(a: vec2.Vec2, b: vec2.Vec2) : vec2.Vec2;
export function sub(a: vec3.Vec3, b: vec3.Vec3) : vec3.Vec3;
export function sub(a: vec4.Vec4, b: vec4.Vec4) : vec4.Vec4;
export function sub(a: number[], b: number[]) : number[] {

    let aDim = a.length
    let bDim = b.length

    const subMap: funcMapper = {
        2: vec2.substract,
        3: vec3.substract,
        4: vec4.substract
    }

    return subMap[aDim](a, b)    
}
