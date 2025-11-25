import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/RegistrationPage/RegistrationPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import GameDetails from "../Pages/GameDetails/GameDetails";

let router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        errorElement: <h1>404</h1>,
        children: [
            {

                path: "/",
                Component: Home
            },


        ]

    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <RegistrationPage></RegistrationPage>
    },
    {
        path: "/games/:id",
        element: <GameDetails />,
    },
]);


export default router;