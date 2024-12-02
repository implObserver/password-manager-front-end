import { MainLayout } from "@/layouts/default";
import { MainPage } from "@/pages/main";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
        ],
    },
];

export default routes;