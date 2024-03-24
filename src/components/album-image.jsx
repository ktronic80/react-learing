import React, { useEffect, useState } from "react";

export default function AlbumImage({ id, name, imageUrl }) {

  const [favorites, setFavorites] = useState(new Map());

  const saveFavourites = (e) => {
    console.log("saveFavourites");
    if (favorites.has(id)) {
      console.log("Already saved");
    } else {
      console.log("Saving");
      favorites.set(id, {name: name, imageUrl: imageUrl});
      setFavorites(favorites);
    }
  };

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <div>{name}</div>
      <span className="material-symbols-outlined" onClick={saveFavourites}>
        star
      </span>
      </div>
    </div>
  );
}
