import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OrgDevices } from "./OrgDevices.jsx";
// import { Org1 } from "./Org1.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        <h1>404</h1>
        <p>Not found</p>
      </div>
    ),
    children: [
      {
        path: "/org/0",
        element: <OrgDevices orgNumber={0} />,
      },
      {
        path: "/org/1",
        element: <OrgDevices orgNumber={1} />,
      },
      {
        path: "/org/2",
        element: <OrgDevices orgNumber={2} />,
      },
      {
        path: "/org/3",
        element: <OrgDevices orgNumber={3} />,
      },
    ],
  },
]);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const queryClient = new QueryClient();
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
