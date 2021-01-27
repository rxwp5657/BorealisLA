export const EPSILON = 0.00001


export interface funcMapper {
    [index: number] : (...params: any) => any
}

/**
 * Zip function mainly used for vectors. 
 * Given an array of numbers this function will make tuples
 * of all the entries in the same position of all vectors.
 * For example:
 * 
 * arrays = [[1, 2, 3], [4, 5, 6], [0, 0]]
 * 
 * result = [[1, 4, 0], [2, 5, 0], [3, 6, undefined]] 
 */
export function zip(...arrays: any[][]): any[][] {

    let lengths = arrays.map(comp => comp.length)
    let largest = lengths.sort((a, b) => b - a)[0] || 0

    let result: any[] = []

    for(let i = 0; i < largest; i++){
        let tuple: any[] = []
        for(let array of arrays){
            tuple.push(array[i])
        }
        result.push(tuple)
    }

    return result
}

export function isEqual(a: number[], b: number[]): boolean {

    if(a.length !== b.length) return false;

    for(let i = 0; i < a.length; i++) {
        if(Math.abs(a[i] - b[i]) > EPSILON){
            return false
        }
    }

    return true
}