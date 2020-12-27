import { zip } from "./utils"

const EPSILON = 0.00001

/**
 * N dimentional vector class
 */
export class Vector {
    readonly components: number[]

    constructor(...params: number[]) {
        this.components = params
    }
    /**
     * Return the number of components of the vector.
     */
    dimension(): number {
        return this.components.length
    }
}

/**
 * Get the length/norm of the vector vec.
 */
export const length = (vec: Vector) : number => {
    let squares = vec.components.map(comp => Math.pow(comp, 2))
    let sum = squares.reduce((len, comp) => len + comp, 0)
    return Math.sqrt(sum)
}

/**
 *  Multiply a vector vec by a scalar s.
 */
export const multiply = (vec: Vector, s: number) : Vector => {
    let newComponents = vec.components.map((comp) => comp * s)
    return new Vector(...newComponents)
}

/**
 * Divide a vector vec by a scalar s.
 */
export const divide = (vec: Vector, s: number) : Vector => {
    let newComponents = vec.components.map((comp) => comp / s)
    return new Vector(...newComponents)
}

/**
 * Normalize (length of vector === 1) a vector vec.
 */
export const normalize = (vec: Vector): Vector => {
    return new Vector(...divide(vec, length(vec)).components)
}

/**
 * Apply the dot product to a list of vectors.
 */
export const dot = (...vectors: Vector[]): number => {
    let comps = vectors.map(vector => vector.components)
    let mul = zip(...comps).map(entry => entry.reduce((acc, curr) => acc * (curr || 0), 1))
    return mul.reduce((acc, curr) => acc + curr, 0)
}

/**
 * Add any number of vectors.
 * @param vectors apply vector addition to the specified list of vectors.
 */
export const add = (...vectors: Vector[]): Vector => {
    let comps = vectors.map(vector => vector.components)
    let result = zip(...comps).map(entry => entry.reduce((acc, curr) => acc + (curr || 0), 0))
    return new Vector(...result)
}

/**
 * Substract any number of vectors.
 * @param vectors apply vector substraction to the specified list of vectors.
 */
export const sub = (...vectors: Vector[]): Vector => {
    let comps = vectors.map(vector => vector.components)
    let result = zip(...comps).map(entry => entry.reduce((acc, curr, i) => {
        return i === 0 ? curr : acc - (curr || 0)
    }, 0))
    return new Vector(...result)
}

/**
 * Vector Cross product. 
 * Note that this operation is only defined to 3D vectors.
 * @throws Error if any of the supplied vectors are not 3D.
 */
export const cross = (a: Vector, b: Vector) : Vector => {

    if(a.components.length !== 3 || b.components.length !== 3){
        throw new Error("Only 3D vectors are supported")
    }

    let ax = a.components[0]
    let ay = a.components[1]
    let az = a.components[2]
    
    let bx = b.components[0]
    let by = b.components[1]
    let bz = b.components[2]

    return new Vector(ay * bz - az * by,
                      az * bx - ax * bz,
                      ax * by - ay * bx)
}

export const isEqual = (a: Vector, b: Vector): boolean  => {
        
    if(a.dimension() !== b.dimension())
        return false

    for(let i = 0; i < a.dimension(); i++){
        if(Math.abs(a.components[i] - a.components[i]) > EPSILON)
            return false
    }

    return true
}