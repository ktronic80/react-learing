export function loadFavourites() {
    let favorites = localStorage.getItem("favorites");

    if (!favorites) {
        return new Map();
    } else {
        return  new Map(JSON.parse(favorites));
    }
}

export function saveFavourites(e, id, name, imageUrl) {
    console.log("saveFavourites");
    let favorites = localStorage.getItem("favorites");

    if (!favorites) {
        favorites = new Map();
    } else {
        favorites = new Map(JSON.parse(favorites));
    }

    if (favorites.has(id)) {
        console.log("Already saved");
        favorites.delete(id);
    } else {
        console.log("Saving");
        favorites.set(id, {name: name, imageUrl: imageUrl});
    }

    localStorage.setItem("favorites", JSON.stringify(Array.from(favorites.entries())));
};
