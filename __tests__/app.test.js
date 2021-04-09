const request = require('supertest');
const app = require('../lib/app');
const { getDefinition } = require('../lib/utils/api-fetch');
// require('../lib/data/data-helpers');

// jest mocks a fetch
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('TA-fullstack-vanillajs tests', () => {
  it.only('should add a word and definition to the database', () => {
    
    // mock from api
    fetch.mockResolvedValue(
      {
        // returns the api res
        async json() {
          return {
            definitions: [
              {
                type: 'NOUN',
                definition: 'a road vehicle, typically with four wheels, powered by an internal-combustion engine and able to carry a small number of people.',
                example: "we're going <b>by car</b>",
                image_url: null,
                emoji: null
              }
            ],
            word: 'car',
            pronunciation: 'kär'
          };
        }
      }
    );

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
      });
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
