import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import HomePage from "./HomePage.tsx";
import AboutPage from "./AboutPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: '/about', element: <AboutPage/>}
        ]
    }
])

export default router