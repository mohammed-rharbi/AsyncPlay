import LandingPage from "../pages/landingPage";
import GetStarted from "../components/getStarted";

const UserRouter = [
    {
        path: "/",
        element: ( <LandingPage /> )
    },

    {
        path: "/Join_us",
        element: ( <GetStarted /> )
    },
    
];

export default UserRouter;
