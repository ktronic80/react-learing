import {saveFavourites} from "./favourites-actions";

export default function AlbumImage({ id, name, imageUrl }) {

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <div>{name}</div>
      <span className="material-symbols-outlined" onClick={(e) => saveFavourites(e, id, name, imageUrl)}>
        star
      </span>
      </div>
    </div>
  );
}
