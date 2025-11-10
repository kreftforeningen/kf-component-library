import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomeDemo = lazy(() => import("@/demo/home"));
const AccentuatedLinkDemo = lazy(() => import("@/demo/accentuated-link"));
const HomeTempDemo = lazy(() => import("@/demo/home-temp"));

import { ThemeProvider } from "./theme-provider";

function RootLayout() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={null}>
            <HomeTempDemo />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={null}>
            <HomeDemo />
          </Suspense>
        ),
      },
      {
        path: "/accentuated-link",
        element: (
          <Suspense fallback={null}>
            <AccentuatedLinkDemo />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
