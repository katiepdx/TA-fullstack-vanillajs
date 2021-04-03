const pool = require('../utils/pool');

module.exports = class Word {
  id;
  word;
  word_definition;

  constructor(word) {
    this.id = word.id;
    this.word = word.word;
    this.word_definition = word.word_definition;
  }

  static async addWord(word, definition) {
    const { rows } = await pool.query(
      `INSERT INTO words
      (word, word_definition)
      VALUES ($1, $2)
      RETURNING *`,
      [word, definition]
    );
    return new Word(rows[0]);
  }

  static async getWords() {
    const { rows } = await pool.query(`SELECT * FROM words`);

    return rows.map(word => new Word(word));
  }
};
