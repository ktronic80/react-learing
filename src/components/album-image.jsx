export default function AlbumImage({ id, name, imageUrl }) {
  
  const saveFavourites = (e) => {
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
