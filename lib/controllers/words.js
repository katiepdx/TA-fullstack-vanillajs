const { Router } = require('express');
const WordService = require('../services/WordService');

module.exports = Router()
  .post('/', (req, res, next) => {
    WordService
      .addWord(req.body)
      .then(word => res.send(word))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    WordService
      .getWords(req.body)
      .then(words => res.send(words))
      .catch(next);
  });
