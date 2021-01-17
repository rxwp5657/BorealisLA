import { create as mat3 } from "../src/matrix/matrix3"
import * as mat from "../src/matrix/matrix"

import { isEqual } from "../src/utils"

describe("3D Matrix test suite", () => {

    it("it should add matrices", () => {

        let a = mat3(1, 2, 3,
                     4, 5, 6,
                     7, 8, 9)
        
        let b = mat3(4, 5, 6,
                     1, 2, 3,
                     7, 8, 9)
        
        let c = mat3(1, 2, 3,
                     7, 8, 9,
                     4, 5, 6)
        
        let expected = mat3(6,  9,  12,
                            12, 15, 18,
                            18, 21, 24)
        
        let result = mat.add(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should substract matrices", () => {

        let a = mat3(1, 2, 3,
                     4, 5, 6,
                     7, 8, 9)

        let b = mat3(4, 5, 6,
                     1, 2, 3,
                     7, 8, 9)

        let c = mat3(1, 2, 3,
                     7, 8, 9,
                     4, 5, 6)

        let expected = mat3(-4, -5, -6,
                            -4, -5, -6,
                            -4, -5, -6)

        let result = mat.sub(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should multiply a matrix by a scalar", () => {

        let a = mat3(1, 2, 3,
                     4, 5, 6,
                     7, 8, 9)

        let expected = mat3(10, 20, 30,
                            40, 50, 60,
                            70, 80, 90)

        let result = mat.scalarMul(a, 10)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should transpose a matrix", () => {

        let a = mat3(1, 2, 3,
                     4, 5, 6,
                     7, 8, 9)

        let expected = mat3(1, 4, 7,
                            2, 5, 8,
                            3, 6, 9)

        let result = mat.transpose(a)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should calculate its determinant", () => {

        let a = mat3(1, 2, 3,
                     4, 5, 6,
                     7, 8, 9)

        expect(mat.det(a)).toBe(0)
    })

    it("it should inverse a matrix", () => {
        
        let a = mat3(6, 4, 4,
                     5, 5, 7,
                     4,-9, 3)

        let expected = [0.300,-0.184, 0.030,
                        0.05,  0.007,-0.084,
                        -0.25,  0.269, 0.038]

        let result = mat.inverse(a)

        for(let i = 0; i < a.length; i++) {
            expect(result[i]).toBeCloseTo(expected[i])
        }

    })

    it("it should multiply matrices", () => {

        let a = mat3(1, 2, 3,
                     4, 5, 6,
                     7, 8, 9)

        let b = mat3(4, 5, 6,
                     1, 2, 3,
                     7, 8, 9)

        let c = mat3(1, 2, 3,
                     7, 8, 9,
                     4, 5, 6)

        let expected = mat3(414, 513, 612,
                	        981, 1215,1449,
                            1548,1917,2286)

        let result = mat.mul(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })
})