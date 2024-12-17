import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {ClerkProvider} from "@clerk/clerk-react";
import axios from 'axios'
import router from "@/router/router";
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.axios = axios

createRoot(document.getElementById('root')!).render(<StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"} signInFallbackRedirectUrl={"/"} >
    <RouterProvider router={router}/>
  </ClerkProvider>
</StrictMode>)
