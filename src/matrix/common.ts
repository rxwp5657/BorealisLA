import { Mat2, create as mat2, det as detMat2, det } from "./matrix2"
import { Mat3, create as mat3, det as detMat3 } from "./matrix3"
import { Mat4 } from "./matrix4"

export function submat(mat: Mat3, row: number, col: number): Mat2;
export function submat(mat: Mat4, row: number, col: number): Mat3;
export function submat(mat: number[], row: number, col: number): number[] {

    const factory = mat.length === 16 ? mat3 : mat2
    const dimension = mat.length === 16 ? 4 : 3

    let result = factory()
    let curr = 0

    mat.forEach((entry, index) => {
        let i = Math.floor(index / dimension);
        let j = index % dimension;

        if(i !== row && j !== col) {
            result[curr] = entry
            curr++ 
        }
    })

    return result
}