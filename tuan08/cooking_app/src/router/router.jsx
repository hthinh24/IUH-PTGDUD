import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import { Children } from "react";
import Body from "../components/home/Body";
import SignupPage from "../pages/signup/SignupPage";
import LoginPage from "../pages/loginnnnn/LoginPage";
import RecipesPage from "../pages/recipe/recipePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <Body />
            }
        ]
    },
    {
        path: "/sign-up",
        element: <SignupPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/recipe",
        element: <RecipesPage />
    },
]);