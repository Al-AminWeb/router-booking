import {createBrowserRouter} from "react-router";
import ErrorPage from "../pages/ErrorPage.jsx";
import MainLayouts from "../layouts/MainLayouts.jsx";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import LawyerContainer from "../pages/LawyerContainer.jsx";
import LawyerDetails from "../pages/LawyerDetails.jsx";
import Booking from "../pages/Booking.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorPage/>,
        children: [{
            index: true,
            element: <Home />,
            hydrateFallbackElement:<p>Loading, please wait...</p>,
            loader:()=>fetch('../lawyer.json')
        },
            {
                path:'/blog',
                element:<Blog/>,
                loader:()=>fetch('../blog.json')
            },
            {
                path:'/',
                element:<LawyerContainer />,
            },
            {
                path:'/lawyer-details/:id',
                element:<LawyerDetails />,
                loader:()=>fetch('../lawyer.json')
            },
            {
                path:'/bookings',
                element:<Booking/>,
                loader:()=>fetch('../lawyer.json')
            }

        ]
    },
]);

export default router;