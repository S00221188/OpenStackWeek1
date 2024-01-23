import { compute } from "./compute";

describe ('compute', () => {
    it('should return 0 if the inut is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })
})