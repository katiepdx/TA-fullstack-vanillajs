const Word = require('../model/Word');
const { getDefinition } = require('../utils/api-fetch.js');

module.exports = class WordService {
  static async addWord({ word }) {
    return getDefinition(word)
      .then(res => res.json())
      .then(apiRes => Word.addWord(word, apiRes.definitions[0].definition));
  }

  static getWords() {
    return Word.getWords();
  }
};
