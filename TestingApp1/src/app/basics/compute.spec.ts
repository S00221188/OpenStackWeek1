import { compute } from "./compute";

describe ('compute', () => {
    it('should return 0 if the inut is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it ("should return input+1 if the input is positive", () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
    //toBeGreaterThan
    it ("should check if a value is greater than another", () => {
        const result = compute(1)
        expect(result).toBeGreaterThan(0);
    })
});