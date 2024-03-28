import React, { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";
import AlbumGrid from "./album-grid";
import NameSearchBar from "./name-search-bar";

async function fetchAllCharacters(name) {

  if (name !== "") {
    const initialCallUrl = `https://rickandmortyapi.com/api/character/?name=${name}`

    let response = await fetchData(initialCallUrl);

    //console.log(response);

    const allCharacters = response.characters;

    while (response.next) {
      response = await fetchData(response.next);
      allCharacters.push(...response.characters);
    }

    //console.log(allCharacters.length);
    return allCharacters;
  }
}

async function fetchData(url) {
  // https://rickandmortyapi.com/api/character/?page=2&name=ric
  const response = await fetch(url);
  //console.log(response);
  const data = await response.json();
  //  console.log(data);
  if (data.results) {
    const allCharacters = data.results.map((character) => {
      return { id: character.id, name: character.name, image: character.image };
    });
    return { characters: allCharacters, next: data.info.next };
  }

  return { characters: [], next: null };
}
export default function Album() {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchAllCharacters(searchInput)
      .then(allCharacters => setImages(allCharacters));
  }, [searchInput]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setSearchInput("");
    }
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <NameSearchBar onChange={handleChange} searchInput={searchInput} />
      <AlbumGrid images={images} searchTerm={searchInput} />
    </div>
  );
}
