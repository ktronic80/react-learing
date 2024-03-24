import React, { useEffect, useState } from "react";

function createFavourites(favorites) {
    let fav = favorites.entries().next();
   
    while(!fav.done) {
        console.log(fav.value);
        fav = fav.next();
    }
}

export default function Favourties() {
    const [favorites, setFavorites] = useState(new Map());
    return <div>{createFavourites(favorites)}</div>;
}