import {createBrowserRouter} from "react-router-dom";
import Layout from "@/components/layout/layout.tsx";
import {SignedIn, SignedOut} from "@clerk/clerk-react";
import {lazy} from "react";

const Home = lazy(() => import("@/pages/home/home.tsx"));
const Guest = lazy(() => import("@/pages/guest/guest.tsx"))

const routes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      /* Home */
      {
        index: true,
        element: <>
          <SignedOut>
            <Guest/>
          </SignedOut>
          <SignedIn>
            <Home/>
          </SignedIn>
        </>,
      },
    ],
  },
];


const router = createBrowserRouter(routes, {
  basename: '/',
});

export default router;