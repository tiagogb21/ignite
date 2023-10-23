import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import httpStatus from 'http-status';

import app from '@/app';

const userMocka = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '123456',
}

describe('Register (e2e)', () => {
    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should be able to register', async () => {
        const response = await request(app.server).post('/users').send(userMocka)

        expect(response.statusCode).toEqual(httpStatus.CREATED)
    })
})
