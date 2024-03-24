import "./styles.css";
import Nav from "./components/nav";
import TipOfTheDay from "./components/tip-of-the-day";
import Album from "./components/album";
import { Outlet } from "react-router-dom";


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
      <Outlet />
    </div>
  );
}
