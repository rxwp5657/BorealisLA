import { create as mat4, Mat4, vecMul } from "../src/matrix/matrix4" 
import { create as vec4, Vec4 } from "../src/vector/vec4"
import { isEqual } from "../src/utils"
import * as transforms from "../src/transforms"

describe("Translation, Rotation and Scaling transforms unit tests", () => {
    
    it("should translate a point in by a, b, c units", () => {
        
        const translationMat = transforms.translation(1.0, 2.0, 3.0)
        const pointA = vec4(0.0, 0.0, 0.0, 1.0)

        const res = vecMul(translationMat, pointA)
        const expected = vec4(1.0, 2.0, 3.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should rotate a point 45deg over the x axis", () => {

        const rotationMat = transforms.roationX(45.0)
        const pointA = vec4(-3.0, -2.0, -1.0, 1.0)

        const res = vecMul(rotationMat, pointA)
        const expected = vec4(-0.707106, -3.53553, -1.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should rotate a point 90deg over the y axis", () => {

        const rotationMat = transforms.roationY(90.0)
        const pointA = vec4(2.0, 3.0, 1.0, 1.0)

        const res = vecMul(rotationMat, pointA)
        const expected = vec4(1.0, 3.0,-2.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should rotate a point 180deg over the z axis", () => {

        const rotationMat = transforms.roationZ(180.0)
        const pointA = vec4(2.0, 3.0, 1.0, 1.0)

        const res = vecMul(rotationMat, pointA)
        const expected = vec4(2.0, -3.0, -1.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })

    it("should scale a point by a, b, c", () => {

        const scaleMat = transforms.scale(2.0, 2.0, 2.0)
        const pointA = vec4(2.0, 3.0, 1.0, 1.0)

        const res = vecMul(scaleMat, pointA)
        const expected = vec4(4.0, 6.0, 2.0, 1.0)

        expect(isEqual(res, expected)).toBeTruthy()
    })
})