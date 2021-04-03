const request = require('supertest');
const app = require('../lib/app');
require('../lib/data/data-helpers');

describe('TA-fullstack-vanillajs tests', () => {
  it('should add a word and definition to the database', () => {
    return request(app)
      .post('/api/v1/words')
      .send({
        word: 'car',
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          word: 'car',
          word_definition: 'a road vehicle, typically with four wheels, powered by an internal-combustion engine and able to carry a small number of people.'
        });
      })
  });

  it('should get all the words from the database', () => {
    return request(app)
      .get('/api/v1/words')
      .then(res => {
        expect(res.body).toEqual(expect.arrayContaining([
          { id: expect.any(String), word: 'cat', word_definition: 'a small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.' },
          { id: expect.any(String), word: 'car', word_definition: 'a road vehicle, typically with four wheels, powered by an internal-combustion engine and able to carry a small number of people.' },
        ])
        );
      });
  });
});
