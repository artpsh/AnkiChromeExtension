import WordTranslation from './WordTranslation';

export function createWordTranslation(obj) {

  let allTranslations = [];
  obj.forEach(x => {
    allTranslations.push(x.translation.text);
  });

  let translationsWithoutDoubles = [...new Set(allTranslations)];
  translationsWithoutDoubles.splice(4, translationsWithoutDoubles.length - 1);

  let wordTranslations = [];
  translationsWithoutDoubles.forEach(russianWord => {
    wordTranslations.push(new WordTranslation(russianWord));
  });

  return wordTranslations;
}