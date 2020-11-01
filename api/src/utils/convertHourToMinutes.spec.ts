import convertHourToMinutes from './convertHourToMinutes';
import InvalidTimeError from '../exceptions/InvalidTimeError';
describe('convertHourToMinutes', () => {
    it('should return a valid time in minutes', () => {
        const minutes = convertHourToMinutes('08:00');
        expect(minutes).toBe(480);
    });

    it('should throw an InvalidTimeError', () => {
        expect(() => convertHourToMinutes('error')).toThrow();
    });
});