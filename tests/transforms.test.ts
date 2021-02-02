import { vecMul, transpose } from "../src/matrix/matrix4" 
import { create as vec4 } from "../src/vector/vec4"
import { isEqual } from "../src/utils"
import * as transforms from "../src/transforms"

describe("Translation, Rotation and Scaling transforms unit tests", () => {
    
    it("should translate a point in by a, b, c units", () => {
        
        const translationMat = transforms.translation(1.0, 2.0, 3.0)
        const pointA = vec4(0.0, 0.0, 0.0, 1.0)

        const res = vecMul(pointA, translationMat)
        const expected = vec4(1.0, 2.0, 3.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should rotate a point 45deg over the x axis", () => {

        const rotationMat = transforms.rotationX(45.0)
        const pointA = vec4(-3.0, -2.0, -1.0, 1.0)

        const res = vecMul(pointA, rotationMat)
        const expected = vec4(-0.707106, -3.53553, -1.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should rotate a point 90deg over the y axis", () => {

        const rotationMat = transforms.rotationY(90.0)
        const pointA = vec4(2.0, 3.0, 1.0, 1.0)

        const res = vecMul(pointA, rotationMat)
        const expected = vec4(1.0, 3.0,-2.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should rotate a point 180deg over the z axis", () => {

        const rotationMat = transforms.rotationZ(180.0)
        const pointA = vec4(2.0, 3.0, 1.0, 1.0)

        const res = vecMul(pointA, rotationMat)
        const expected = vec4(2.0, -3.0, -1.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should scale a point by a, b, c", () => {

        const scaleMat = transforms.scale(2.0, 2.0, 2.0)
        const pointA = vec4(2.0, 3.0, 1.0, 1.0)

        const res = vecMul(pointA, scaleMat)
        const expected = vec4(4.0, 6.0, 2.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should create a view transform", () => {

        const pointA = vec4(0.0, 0.0, 5.0, 1.0)

        const eye = vec4(0.0, 0.0, -1.0, 1.0)
        const target = vec4(0.0, 0.0, 1.0, 1.0)
        const up = vec4(0.0, 1.0, 0.0, 0.0)

        const viewMat = transforms.lookAt(eye, target, up)

        const expected = vec4(0.0, 0.0, -4.0, 1.0)
        const res = vecMul(pointA, viewMat)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should create an orthogonal projection transform", () => {
        
        const pointA = vec4(0.0, 0.0, -6.0, 1.0)

        const projMat = transforms.ortho(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0)

        const res = vecMul(pointA, projMat)

        expect(isEqual(res, pointA)).toBeTruthy()
    })

    it("should create a perspective projection transform", () => {
        
        const pointA = vec4(0.0, 0.0, -6.0, 1.0)

        const projMat = transforms.perspective(45.0, 600 / 800, 1, 100)

        const res = vecMul(pointA, projMat)
        const expected = vec4(0.0, 0.0, 4.1, 6.0)

        res.forEach((_, i) => expect(res[i]).toBeCloseTo(expected[i]))
    })
})