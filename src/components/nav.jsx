export default function Nav() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <a href="/home">HOME</a>
      </div>
      <div>
        <a href="/album">ALBUM</a>
      </div>
      <div>
        <a href="/favorites">MY FAVOURITES</a>
      </div>
    </nav>
  );
}
