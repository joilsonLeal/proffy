import InvalidTimeError from '../exceptions/InvalidTimeError';

export default function convertHourToMinutes(time: string) {
        if(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
            const [ hour, minutes ] = time.split(':').map(Number);
            const timeInMinutes = (hour * 60) + minutes;
            return timeInMinutes;
        }
        throw new InvalidTimeError('Invalid time.');
};
