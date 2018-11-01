// jest --watchAll from CLI

const request = require('supertest');
const app = require('../server/server.js');
const db = require('../db/index.js');

// beforeEach(async() => {
//   db.connection.sync({ force: true });
// })

describe('GET /api/products', () => {
  it('should respond with length equal to the size of seeded entries', async () => {
    const response = await request(app).get('/api/products');
    expect(response.body.length).toBe(100);
    expect(response.statusCode).toBe(200);
  })

  it('should respond with a single targeted user', async () => {
    const response = await request(app).get('/api/products/33');
    console.log(response.text.id);
    expect(response.body.id).toBe(33);
    expect(response.statusCode).toBe(200);
  })
})

// describe('POST /api/products', () => {
//   it('should input new product into the database', async () => {
//     const response = await request(app).post('/api/products').send({ title: 'something nice', description: 'so nice!'})
//     expect(response.statusCode).toBe(201);
//     expect(response.body.title).toBe('something nice');
//   })
// })

// describe('GET /api/products', () => {
//   it('should fetch a created user', async () => {
//     const response = await request(app).post('/api/products', { title: 'something nice', description: 'so nice!'});
//     expect(response.statusCode).toBe(201);

  // it('should fetch all created users', async () => {
  //   const response = await request(app).post('/api/products').send({ title: 'something nice', description: 'so nice!' });

  // })

  // })
// })