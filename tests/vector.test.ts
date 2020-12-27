import { exec } from "child_process"
import * as vector from "../src/vector"


describe("Vector test suite", () => {

    it("it should add vectors of the same length", () => {

        let a = new vector.Vector(1.0, 2.1, 3.2)
        let b = new vector.Vector(4.0, 5.1, 6.2)
        let c = new vector.Vector(7.0, 8.0, 9.0)
        
        let expected = new vector.Vector(12.0, 15.2, 18.4)

        let result = vector.add(a, b, c)

        expect(vector.isEqual(expected, result)).toBeTruthy()
    })

    it("it should add vectors of the same length", () => {

        let a = new vector.Vector(1.0, 2.1, 3.2)
        let b = new vector.Vector(4.0, 5.1)
        let c = new vector.Vector(7.0)
        let d = new vector.Vector(1.0, 1.2, 1.3, 1.4)

        let expected = new vector.Vector(13.0, 8.4, 4.5, 1.4)

        let result = vector.add(a, b, c, d)

        expect(vector.isEqual(expected, result)).toBeTruthy()
    })

    it("it should substract vectors of same length", () => {

        let a = new vector.Vector(1.0, 2.1, 3.2)
        let b = new vector.Vector(4.0, 5.1, 6.2)
        let c = new vector.Vector(7.0, 8.0, 9.0)

        let expected = new vector.Vector(-10.0, -11.0, -12.0)

        let result = vector.sub(a, b, c)

        expect(vector.isEqual(expected, result)).toBeTruthy()
    })

    it("it should substract vectors of different length", () => {

        let a = new vector.Vector(1.0, 2.1, 3.2)
        let b = new vector.Vector(4.0, 5.1)
        let c = new vector.Vector(7.0)
        let d = new vector.Vector(1.0, 1.2, 1.3, 1.4)

        let expected = new vector.Vector(-11.0, -4.2, 1.9, -1.4)

        let result = vector.sub(a, b, c, d)

        expect(vector.isEqual(expected, result)).toBeTruthy()
    })

    it("it should multiply a vector by a scalar", () => {

        let vec = new vector.Vector(2.1, 2.0, 100.0)

        let expected = new vector.Vector(4.2, 4.0, 200.0)

        let result = vector.multiply(vec, 2)

        expect(vector.isEqual(expected, result)).toBeTruthy()
    })

    it("it should divide a vector by a scalar", () => {

        let vec = new vector.Vector(2.1, 2.0, 100.0)

        let expected = new vector.Vector(1.05, 1.0, 50.0)

        let result = vector.divide(vec, 2)

        expect(vector.isEqual(expected, result)).toBeTruthy()
    })

    it("it should calculate the lenght of a vector", () => {

        let vec = new vector.Vector(2.1, 2.0, 100.0)

        let expected = 100.04204116270319

        let result = vector.length(vec)

        expect(result).toBeCloseTo(expected)
    })

    it("it should normalize a vector", () => {

        let vec = new vector.Vector(2.1, 2.0, 100.0)

        let expected = new vector.Vector(0.02099117506593722, 0.01999159530089259, 0.9995797650446294)

        let result = vector.normalize(vec)
        let lenght = vector.length(result)

        expect(vector.isEqual(expected, result)).toBeTruthy()
        expect(lenght).toBeCloseTo(1.0)
    })

    it("it should calculate the dot product any vectors", () => {

        let a = new vector.Vector(1.0, 2.1, 3.2)
        let b = new vector.Vector(4.0, 5.1)
        let c = new vector.Vector(7.0)
        let d = new vector.Vector(1.0, 1.2, 1.3, 1.4)

        let result = vector.dot(a, b, c, d)

        expect(result).toBeCloseTo(28.0)
    })

    it("it should calculate the cross product of two vectors", () => {

        let a = new vector.Vector(1.0, 2.1, 3.2)
        let b = new vector.Vector(4.0, 5.1, 6.2)

        let expected = new vector.Vector(-3.3, 6.6, -3.3)

        let result = vector.cross(a, b)

        expect(vector.isEqual(expected, result)).toBeTruthy()
    })
})