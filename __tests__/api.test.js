// jest --watchAll from CLI

const request = require('supertest');
const app = require('../server/server.js');

describe('GET /api/products', () => {
  it('should respond with array of 100 seeded entries', async () => {
    const response = await request(app).get('/api/products');
    expect(response.body.length).toBe(100);
    expect(response.statusCode).toBe(200);
  })
})
