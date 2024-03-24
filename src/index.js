import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorPage from "./components/error-page";
import TipOfTheDay from "./components/tip-of-the-day";
import Album from "./components/album";
import Favourties from "./components/favourites";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <TipOfTheDay />
            },
            {
                path: "album",
                element: <Album />
            },
            {
                path: "favorites",
                element: <Favourties />
            }
        ],
    }
]);

root.render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
);
