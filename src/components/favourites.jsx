import React, { useEffect, useState } from "react";
import AlbumImage from "./album-image";
import AlbumGrid from "./album-grid";

function loadFavourites() {
    let favorites = localStorage.getItem("favorites");

    if (!favorites) {
     return new Map();
    } else {
      return  new Map(JSON.parse(favorites));
    }
}

function createFavourites(favorites) {
    if (!favorites) {
        return <div>No favourites saved</div>;
    } else {

        const it = favorites.entries();
        let fav = it.next();
        const favArray = [];
        while (!fav.done) {
            console.log(fav.value);
            favArray.push({ id: fav.value[0], name: fav.value[1].name, image: fav.value[1].imageUrl });
            fav = it.next();
        }
        return <AlbumGrid images={favArray} />;
    }
}

export default function Favourties() {
    const favorites = loadFavourites(); 
    return <div>{createFavourites(favorites)}</div>;
}