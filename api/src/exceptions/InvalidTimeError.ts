export default class InvalidTimeError extends Error {
    constructor(message: string) {
        super(message);
    }
}