import * as vec2 from "./vec2"
import * as vec3 from "./vec3"
import * as vec4 from "./vec4"


interface funcMapper {
    [index: string] : (...params: any) => any
}

function throwIfInvalidType(type: string, map: funcMapper) : void {

    let supportedTypes = Object.keys(map).join(',')

    if(!(type in map)){
        let errorMsg = `Supported types are ${supportedTypes} but got ${type}`
        throw new Error(errorMsg)
    }
}


export function length(vec: vec2.Vec2) : number;
export function length(vec: vec3.Vec3) : number;
export function length(vec: vec4.Vec4) : number;
export function length(vec: object) : number {

    let type = vec.constructor.name

    const lenghtMap: funcMapper = {
        "Vec2": vec2.length,
        "Vec3": vec3.length,
        "Vec4": vec4.length
    }

    throwIfInvalidType(type, lenghtMap)

    return lenghtMap[type](vec)
}

export function multiply(vec: vec2.Vec2, s: number) : vec2.Vec2;
export function multiply(vec: vec3.Vec3, s: number) : vec3.Vec3;
export function multiply(vec: vec4.Vec4, s: number) : vec4.Vec4;
export function multiply(vec: object, s: number) : object {
    
    let type = vec.constructor.name
    
    const multiplyMap: funcMapper = {
        "Vec2": vec2.multiply,
        "Vec3": vec3.multiply,
        "Vec4": vec4.multiply
    }
    
    throwIfInvalidType(type, multiplyMap)
    
    return multiplyMap[type](type, s)
}

export function divide(vec: vec2.Vec2, s: number) : vec2.Vec2;
export function divide(vec: vec3.Vec3, s: number) : vec3.Vec3;
export function divide(vec: vec4.Vec4, s: number) : vec4.Vec4;
export function divide(vec: object, s: number) : object {
    
    let type = vec.constructor.name
    
    const divideMap: funcMapper = {
        "Vec2": vec2.multiply,
        "Vec3": vec3.multiply,
        "Vec4": vec4.multiply
    }
    
    throwIfInvalidType(type, divideMap)
    
    return divideMap[type](vec, s)
}

export function normalize(vec: vec2.Vec2) : vec2.Vec2;
export function normalize(vec: vec3.Vec3) : vec3.Vec3;
export function normalize(vec: vec4.Vec4) : vec4.Vec4;
export function normalize(vec: object) : object {

    let type = vec.constructor.name

    const normalMap: funcMapper = {
        "Vec2": vec2.normalize,
        "Vec3": vec3.normalize,
        "Vec4": vec4.normalize
    }

    throwIfInvalidType(type, normalMap)

    return normalMap[type](vec)    
}
