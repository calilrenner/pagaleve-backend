export default class CustomerNotFoundError extends Error {
    constructor(message: string) {
        super();
        this.message = message;

        this.name = 'CustomerNotFoundError';
    }
}
