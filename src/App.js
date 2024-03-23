import "./styles.css";
import Nav from "./components/nav";
import TipOfTheDay from "./components/tip-of-the-day";
import Album from "./components/album";

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Nav />
      <TipOfTheDay />
      <Album />
    </div>
  );
}
