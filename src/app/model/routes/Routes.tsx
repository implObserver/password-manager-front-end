import { MainLayout } from "@/layouts/default";
import { MainPage } from "@/pages/main";
import { Service } from "@/pages/service";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/service/:service",
                element: <Service/>,
            },
        ],
    },
];