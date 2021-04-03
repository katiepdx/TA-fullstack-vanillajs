const fs = require('fs');
const pool = require('../utils/pool');
const seed = require('./seed');

beforeAll(() => {
  return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
});

beforeAll(() => {
  seed();
});
