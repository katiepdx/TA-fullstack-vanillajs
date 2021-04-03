const Word = require('../model/Word');

module.exports = async ({ wordsCount = 3 } = {}) => {
  const wordsToSeed = [...Array(wordsCount)]
    .map((_, index) => ({
      word: `word ${index}`,
      word_definition: `word def ${index}`
    }));
  await Promise.all(wordsToSeed.map(word => Word.addWord(word)));
};
