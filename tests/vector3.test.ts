import { create as vec3, cross } from "../src/vector/vec3"
import * as vec from "../src/vector/vector"

import { isEqual } from "../src/utils"

describe("Vector 3D test suite", () => {

    it("it should add two vectors", () => {
        let a = vec3(1.2, 2.3, 3.4)
        let b = vec3(3.1, 8.2, 1.1)

        let expected = vec3(4.3, 10.5, 4.5)

        let result = vec.add(a, b);

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should substract two vectors", () => {
        let a = vec3(1.2, 2.3, 3.4)
        let b = vec3(3.1, 8.2, 1.1)

        let expected = vec3(-1.9, -5.9, 2.3)

        let result = vec.sub(a, b);

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should multiply a vector by a scalar", () => {
        let a = vec3(1.3, 4.1, 9.1)
        
        let expected = vec3(3.9, 12.3, 27.3)

        let result = vec.multiply(a, 3)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should divide a vector by a scalar", () => {
        let a = vec3(1.3, 4.1, 9.1)
        
        let expected = vec3(0.65, 2.05, 4.55)

        let result = vec.divide(a, 2)

        expect(isEqual(result, expected)).toBeTruthy()
    })

    it("it should calculate the lenght of a vector", () => {
        let a = vec3(1.3, 4.1, 9.1)

        expect(vec.length(a)).toBeCloseTo(10.065286881157437);
    })

    it("it should normalize a vector", () => {
        let a = vec3(1.3, 4.1, 9.1)

        expect(vec.length(vec.normalize(a))).toBeCloseTo(1.0);
    })

    it("it should calculate the dot product of two vectors", () => {
        let a = vec3(1.2, 2.3, 3.4)
        let b = vec3(3.1, 8.2, 1.1)

        expect(vec.dot(a, b)).toBeCloseTo(26.32);
    })

    it("it should calculate the cross product of two vectors", () => {
        let a = vec3(1.2, 2.3, 3.4)
        let b = vec3(3.1, 8.2, 1.1)

        let expected = vec3(-25.35, 9.22, 2.71)

        let result = cross(a, b)

        expect(isEqual(result, expected)).toBeTruthy()
    })
})