const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('TA-vanilla-js-fe-todos routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
