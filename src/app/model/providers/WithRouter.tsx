import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "../routes/Routes";

export const WithRouter = () => {
    const router = createBrowserRouter(routes);
    return (
        <RouterProvider router={router} />
    )
}