import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layout/Layout";
import App from "./src/App";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Services from "./src/pages/Services";

export const router = createBrowserRouter([
    {path:"/",
    element:<Layout />,
    children:[
        {path:"/", element:<App />},
        {path:"/about", element:<About />},
        {path:"/contact", element:<Contact />},
        {path:"/services", element:<Services />}
    ]
    }
])