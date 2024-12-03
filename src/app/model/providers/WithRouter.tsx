import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../routes/Routes";

const router = createBrowserRouter(routes);

export const WithRouter: React.FC = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}