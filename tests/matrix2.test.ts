import { create as mat2 } from "../src/matrix/matrix2"
import * as mat from "../src/matrix/matrix"

import { isEqual } from "../src/utils"

describe("2D Matrix test suite", () => {

    it("it should add matrices", () => {

        let a = mat2(1, 2, 3, 4)
        let b = mat2(5, 6, 7, 8)
        let c = mat2(9, 8 ,7, 6)

        let expected = mat2(15, 16, 17, 18)
        
        let result = mat.add(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should substract matrices", () => {

        let a = mat2(1, 2, 3, 4)
        let b = mat2(5, 6, 7, 8)
        let c = mat2(1, 1, 1, 1)

        let expected = mat2(-5, -5, -5, -5)
        
        let result = mat.sub(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should multiply a matrix by a scalar", () => {

        let a = mat2(1, 2, 3, 4)

        let expected = mat2(2, 4, 6, 8)

        let result = mat.scalarMul(a, 2)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should transpose a matrix", () => {

        let a = mat2(1, 2, 3, 4)

        let expected = mat2(1, 3, 2, 4)

        let result = mat.transpose(a)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should calculate its determinant", () => {

        let a = mat2(1, 2, 3, 4)

        let result = mat.det(a)

        expect(result).toBe(-2)
    })

    it("it should multiply matrices", () => {

        let a = mat2(1, 2, 3, 4)
        let b = mat2(5, 6, 7, 8)
        let c = mat2(2, 3, 9, 8)

        let expected = mat2(236, 233, 536, 529)
        
        let result = mat.mul(a, b, c)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should get the inverse of a matrix", () => {
        let a = mat2(1, 2, 3, 4)

        let expected = mat2(-2, 1, 3 / 2, -1 / 2)
        
        let result = mat.inverse(a)

        expect(isEqual(result, expected)).toBeTruthy()
    })
})