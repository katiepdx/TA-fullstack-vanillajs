const request = require('supertest');
const app = require('../lib/app');
require('../lib/data/data-helpers');

describe('TA-fullstack-vanillajs tests', () => {
  it('should add a word and definition to the database', () => {
    return request(app)
      .post('/api/v1/words')
      .send({
        word: 'New word',
        word_definition: 'New Word Definition'
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          word: 'New word',
          word_definition: 'New Word Definition'
        });
      });
  });

  it('should get all the words from the database', () => {
    return request(app)
      .get('/api/v1/words')
      .then(res => {
        expect(res.body).toEqual(expect.arrayContaining([
          { id: expect.any(String), word: 'word 0', word_definition: 'word def 0' },
          { id: expect.any(String), word: 'word 1', word_definition: 'word def 1' },
          { id: expect.any(String), word: 'word 2', word_definition: 'word def 2' }
        ])
        );
      });
  });
});
