import React, {useEffect, useState} from "react";
import {getCharacters} from "rickmortyapi";
import AlbumGrid from "./album-grid";

async function fetchAllCharacters(name) {
  //
  const initialCallUrl = `https://rickandmortyapi.com/api/character/?name=${name}`
  let response = await fetchData(initialCallUrl);
  console.log(response);
  const allCharacters = response.characters;
  while (response.next) {
    response = await fetchData(response.next);
    allCharacters.push(...response.characters);
  }
  console.log(allCharacters.length);
  return allCharacters;
}

async function fetchData(url) {
  // https://rickandmortyapi.com/api/character/?page=2&name=ric
  const response = await fetch(url);
  //console.log(response);
  const data = await response.json();
    console.log(data);
  const allCharacters = data.results.map((character) => {
    return {name: character.name, image: character.image};
  });

  return {characters: allCharacters, next: data.info.next};
}
export default function Album() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchAllCharacters("rick")
        .then( allCharacters=> setImages(allCharacters));
  }, []);

  return (
    <div>
      <AlbumGrid images={images} searchTerm="rick" />
    </div>
  );
}
