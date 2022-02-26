import supertest from 'supertest';
import '@/setup';
import app from '../../src/app';

const agent = supertest(app);

describe('/HEALTH', () => {
    test('Should return status 200 and OK', async () => {
        const result = await agent.get('/health');
        expect(result.statusCode).toBe(200);
    });
});
