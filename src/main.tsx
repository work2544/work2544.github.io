import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import smoothScrollPolyfill from "smoothscroll-polyfill";
import { ChakraProvider} from "@chakra-ui/react";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Work from "./routes/Work";
import theme from "./assets/theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />} />
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Route>
  )
);
smoothScrollPolyfill.polyfill();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
