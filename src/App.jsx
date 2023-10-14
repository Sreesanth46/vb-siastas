import { RouterProvider } from "react-router-dom";
import router from "./router";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            {/* <NavBar /> */}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
