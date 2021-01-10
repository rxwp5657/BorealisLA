import { create as vec2 } from "../src/vector/vec2"
import * as vec from "../src/vector/vector"

describe("Vector 2D test suite", () => {

    it("it should add two vectors", () => {
        let a = vec2(1.2, 2.3)
        let b = vec2(3.1, 8.2)

        let expected = vec2(4.3, 10.5)

        let result = vec.add(a, b);

        expect(vec.isEqual(result, expected)).toBeTruthy()
    })

    it("it should substract two vectors", () => {
        let a = vec2(1.2, 2.3)
        let b = vec2(3.1, 8.2)

        let expected = vec2(-1.9, -5.9)

        let result = vec.sub(a, b);

        expect(vec.isEqual(result, expected)).toBeTruthy()
    })

    it("it should multiply a vector by a scalar", () => {
        let a = vec2(1.3, 4.1)
        
        let expected = vec2(3.9, 12.3)

        let result = vec.multiply(a, 3)

        expect(vec.isEqual(result, expected)).toBeTruthy()
    })

    it("it should divide a vector by a scalar", () => {
        let a = vec2(1.3, 4.1)

        let expected = vec2(0.65, 2.05)

        let result = vec.divide(a, 2)

        expect(vec.isEqual(result, expected)).toBeTruthy()
    })

    it("it should calculate the lenght of a vector", () => {

        let a = vec2(1.3, 4.1)

        expect(vec.length(a)).toBeCloseTo(4.301162633521313);
    })

    it("it should normalize a vector", () => {
        
        let a = vec2(1.3, 4.1)

        expect(vec.length(vec.normalize(a))).toBeCloseTo(1.0);
    })

    it("it should calculate the dot product of two vectors", () => {
    
        let a = vec2(1.3, 4.1)
        let b = vec2(2.3, 2.0)

        expect(vec.dot(a, b)).toBeCloseTo(11.19);
    })
})
