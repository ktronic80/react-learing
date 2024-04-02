import React, { useEffect, useState } from "react";
import AlbumImage from "./album-image";
import AlbumGrid from "./album-grid";
import { loadFavourites } from "./favourites-actions";

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
    const [favorites, setFavorites] = useState(loadFavourites());
    useEffect(() => {
        setFavorites(loadFavourites());
    }, [favorites]);
    return <div>{createFavourites(favorites)}</div>;
}