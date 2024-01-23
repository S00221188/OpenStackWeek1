import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    let currencies: string[];

    beforeEach(() => {
        currencies = getCurrencies(); 
    });

    it('should contain USD', () => {
        expect(currencies).toContain('USD');
    });

    it('should contain GBP', () => {
        expect(currencies).toContain('GBP');
    });

    it('should contain EUR', () => {
        expect(currencies).toContain('EUR');
    });
    it('should not contain CAD', () => {
        const doesContainCAD = currencies.includes('CAD');
        expect(doesContainCAD).toBeFalsy();
      });
});