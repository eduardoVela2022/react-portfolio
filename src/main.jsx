import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";

// Website router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // About page (Homepage)
      { index: true, element: <About /> },
      // Portfolio page
      { path: "/portfolio", element: <Portfolio /> },
      // Contact page
      { path: "/contact", element: <Contact /> },
      // Resume page
      { path: "/resume", element: <Resume /> },
    ],
  },
]);

// The main component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
