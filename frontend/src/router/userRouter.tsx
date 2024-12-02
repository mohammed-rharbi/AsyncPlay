import LandingPage from "../pages/landingPage";
import GetStarted from "../components/getStarted";
import GetIn from "../components/getIn";
import Home from "../pages/home";

const UserRouter = [
    {
        path: "/",
        element: ( <LandingPage /> )
    },

    {
        path: "/Join_us",
        element: ( <GetStarted /> )
    },

    {
        path: "/get_in",
        element: ( <GetIn /> )
    },

    {
        path: "/home",
        element: ( <Home /> )
    },
    
];

export default UserRouter;
