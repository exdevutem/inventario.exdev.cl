import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {ClerkProvider} from "@clerk/clerk-react";
import router from "@/router/router";
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')!).render(<StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"} signInFallbackRedirectUrl={"/"} >
    <RouterProvider router={router}/>
  </ClerkProvider>
</StrictMode>)
