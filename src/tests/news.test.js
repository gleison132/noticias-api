const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const News = require('../models/newsModel');

describe('API Endpoints', () => {
  beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/news_db_test';
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new news item', async () => {
    const res = await request(app)
      .post('/api/news')
      .send({
        titulo: 'Teste de Titulo',
        descricao: 'Teste de Descricao'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('titulo', 'Teste de Titulo');
    expect(res.body).toHaveProperty('descricao', 'Teste de Descricao');
  });
});
