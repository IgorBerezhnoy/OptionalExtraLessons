export const ru = {
  test: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати',
  charactersPage: {
    title: "Страница с персонажами",
  },
  locationsPage: {
    title: "Страница с локациями",
  },
  characterPage: {
    getDescription(name: string, species: string) {
      return `The character ${name} belongs to the variety ${species}`;
    },
  },
};

export type LocaleType = typeof ru;
