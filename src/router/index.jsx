import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MakeUp from "../pages/MakeUp";
import ShopAll from "../pages/ShopAll";
import HowTo from "../pages/HowTo";
import Cart from "../pages/Cart";
import Error404 from "../pages/Error404";

const routes = [
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "/makeup",
        element: <MakeUp />,
    },
    {
        path: "/shopall",
        element: <ShopAll />,
    },
    {
        path: "/howto",
        element: <HowTo />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/*",
        element: <Error404 />,
    },
];

const router = createBrowserRouter(routes);

export default router;
