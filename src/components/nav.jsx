import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <Link to={`home`}>HOME</Link>
      </div>
      <div>
        <Link to={`album`}>ALBUM</Link>
      </div>
      <div>
        <Link to={`favorites`}>MY FAVOURITES</Link>
      </div>
    </nav>
  );
}
