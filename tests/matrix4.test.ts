import { create as mat4 } from "../src/matrix/matrix4"
import * as mat from "../src/matrix/matrix"

import { isEqual } from "../src/utils"

describe("4D Matrix test suite", () => {

    it("it should add matrices", () => {

        let a = mat4(1, 1, 1, 1,
                     2, 2, 2, 2, 
                     3, 3, 3, 3, 
                     4, 4, 4, 4)

        let b = mat4(2, 1, 1, 1,
                     2, 1, 1, 1,
                     2, 1, 3, 3,
                     2, 1, 3, 4)
        
        let c = mat4(1, 1, 1, 1,
                     1, 1, 1, 1,
                     1, 1, 1, 1,
                     1, 1, 1, 1)

        let expected = mat4(4, 3, 3, 3,
                            5, 4, 4, 4,
                            6, 5, 7, 7,
                            7, 6, 8, 9)

        let result = mat.add(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should substract matrices", () => {

        let a = mat4(1, 1, 1, 1,
                     2, 2, 2, 2, 
                     3, 3, 3, 3, 
                     4, 4, 4, 4)

        let b = mat4(2, 1, 1, 1,
                     2, 1, 1, 1,
                     2, 1, 3, 3,
                     2, 1, 3, 4)

        let c = mat4(1, 1, 1, 1,
                     1, 1, 1, 1,
                     1, 1, 1, 1,
                     1, 1, 1, 1)

        let expected = mat4(-2, -1, -1, -1,
                            -1,  0,  0,  0,
                             0,  1, -1, -1,
                             1,  2,  0, -1)

        let result = mat.sub(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should multiply a matrix by a scalar", () => {

        let a = mat4(1, 1, 1, 1,
                     2, 2, 2, 2,
                     3, 3, 3, 3, 
                     4, 4, 4, 4)

        let expected = mat4(2, 2, 2, 2,
                            4, 4, 4, 4,
                            6, 6, 6, 6,
                            8, 8, 8, 8)

        let result = mat.scalarMul(a, 2)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should transpose a matrix", () => {

        let a = mat4(1, 1, 1, 1,
                     2, 2, 2, 2,
                     3, 3, 3, 3, 
                     4, 4, 4, 4)

        let expected = mat4(1, 2, 3, 4,
                            1, 2, 3, 4,
                            1, 2, 3, 4,
                            1, 2, 3, 4)

        let result = mat.transpose(a)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should calculate its determinant", () => {
        let a = mat4(6, 4, 4, 4,
                     5, 5, 7, 6,
                     4,-9, 3,-7, 
                     9, 1, 7,-6)

        let result = mat.det(a)

        expect(result).toBe(-2120)
    })

    it("it should multiply matrices", () => {

        let a = mat4(1, 1, 1, 1,
                     2, 2, 2, 2, 
                     3, 3, 3, 3, 
                     4, 4, 4, 4)

        let b = mat4(2, 1, 1, 1,
                     2, 1, 1, 1,
                     2, 1, 3, 3,
                     2, 1, 3, 4)

        let c = mat4(1, 1, 1, 1,
                     1, 1, 1, 1,
                     1, 1, 1, 1,
                     1, 1, 1, 1)

        let expected = mat4(29, 29,  29,  29,
                            58, 58,  58,  58,
                            87, 87,  87,  87,
                           116, 116, 116, 116)

        let result = mat.mul(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should calculate a matrix inverse", () => {

        let a = mat4(9, 3, 0, 9,
                    -5,-2,-6,-3,
                    -4, 9, 6, 4,
                    -7, 6, 6, 2)
        
        let expected = mat4(-0.04074, -0.07778, 0.14444, -0.22222,
                            -0.07778,  0.03333, 0.36667, -0.33333,
                            -0.02901, -0.14630,-0.10926,  0.12963,
                             0.17778,  0.06667,-0.26667,  0.33333)
            
        let result = mat.inverse(a)

        for(let i = 0; i < a.length; i++) {
            expect(result[i]).toBeCloseTo(expected[i])
        }
    })
})