const Word = require('../model/Word');
const WordService = require('../services/WordService');

module.exports = async ({ wordsCount = 1 } = {}) => {
  const wordsToSeed = [...Array(wordsCount)]
    .map((_) => ({
      word: 'cat',
      word_definition: 'cat definition'
    }));
  await Promise.all(wordsToSeed.map(word => Word.addWord(word)));
};
