const Word = require('../model/Word');
const WordService = require('../services/WordService');

module.exports = async ({ wordsCount = 1 } = {}) => {
  const wordsToSeed = [...Array(wordsCount)]
    .map((_) => ({
      word: 'cat',
    }));
  await Promise.all(wordsToSeed.map(word => WordService.addWord(word)));
};
