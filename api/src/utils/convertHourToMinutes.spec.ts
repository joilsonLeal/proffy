import convertHourToMinutes from './convertHourToMinutes';

describe('convertHourToMinutes', () => {
    it('should return a valid time in minutes', () => {
        const minutes = convertHourToMinutes('08:00');
        expect(minutes).toBe(480);
    })
});