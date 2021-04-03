const createForm = document.getElementById('create-word');
const displayWords = document.getElementById('display-words');

const appendWord = (word) => {
  const li = document.createElement('li');
  li.textContent = `Word: ${word.word} - ${word.word_definition}`;

  displayWords.appendChild(li);
};

createForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // FormData - to get data from the word form
  const formData = new FormData(createForm);

  // Post a new word
  fetch('http://localhost:3000/api/v1/words', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      word: formData.get('word'),
    })
  })
    .then(res => res.json())
    .then(appendWord);
});

fetch('http://localhost:3000/api/v1/words')
  .then(res => res.json())
  .then(words => words.forEach(appendWord));
