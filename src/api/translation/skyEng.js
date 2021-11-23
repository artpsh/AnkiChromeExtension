import Word from './Word';
import { createWordTranslation } from './createWordTranslation';

export function fetchTranslation(word) {
  const SKY_ENG_ENDPOINT = 'https://dictionary.skyeng.ru/api/public/v1/words/search?search=';
  word = word.toString().replace(/\s+/g, '').toLowerCase();

  return (
    fetch(SKY_ENG_ENDPOINT + word)
      .then(response => response.json())
      .then(data => {
        let meanings = data.find(el => el).meanings;
        let translations = createWordTranslation(meanings);

        const imageUrl = data[0].meanings[0].imageUrl;
        return new Word(word, imageUrl, translations);
      })
  );
}
