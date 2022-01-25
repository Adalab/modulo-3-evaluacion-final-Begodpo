const callToApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          house: character.house,
          alive: character.alive,
          gender: character.gender,
          alternate_names: character.alternate_names,
        };
      });
      return cleanData;
    });
};

export default callToApi;
