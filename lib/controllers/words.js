const { Router } = require('express');
const Word = require('../model/Word.js');

module.exports = Router()
  .post('/', (req, res, next) => {
    Word
      .addWord(req.body)
      .then(word => res.send(word))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Word
      .getWords(req.body)
      .then(words => res.send(words))
      .catch(next);
  });
