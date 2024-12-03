import { MainLayout } from "@/layouts/default";
import { MainPage } from "@/pages/main";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
        ],
    },
];