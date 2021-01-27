import { create as vec4 } from "../src/vector/vec4"
import * as vec from "../src/vector/vector"

import { isEqual } from "../src/utils"

describe("Vector 4D test suite", () => {

    it("it should add two vectors", () => {
        let a = vec4(1.2, 2.3, 3.4, 12.0)
        let b = vec4(3.1, 8.2, 1.1, 21.0)

        let expected = vec4(4.3, 10.5, 4.5, 33.0)

        let result = vec.add(a, b);

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should substract two vectors", () => {
        let a = vec4(1.2, 2.3, 3.4, 12.0)
        let b = vec4(3.1, 8.2, 1.1, 21.0)

        let expected = vec4(-1.9, -5.9, 2.3, -9.0)

        let result = vec.sub(a, b);

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should multiply a vector by a scalar", () => {
        let a = vec4(1.3, 4.1, 9.1, 2.0)
        
        let expected = vec4(3.9, 12.3, 27.3, 6.0)

        let result = vec.multiply(a, 3)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should divide a vector by a scalar", () => {
        let a = vec4(1.3, 4.1, 9.1, 10.0)
        
        let expected = vec4(0.65, 2.05, 4.55, 5.0)

        let result = vec.divide(a, 2)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should calculate the lenght of a vector", () => {
        let a = vec4(1.3, 4.1, 9.1, 10.0)

        expect(vec.length(a)).toBeCloseTo(14.188375523646108);
    })

    it("it should normalize a vector", () => {
        let a = vec4(1.3, 4.1, 9.1, 10.0)

        expect(vec.length(vec.normalize(a))).toBeCloseTo(1.0);
    })

    it("it should calculate the dot product of two vectors", () => {
        let a = vec4(1.2, 2.3, 3.4, 1.1)
        let b = vec4(3.1, 8.2, 1.1, 1.1)

        expect(vec.dot(a, b)).toBeCloseTo(27.53);
    })
})