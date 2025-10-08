import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Layouts & Pages
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import { Hotel } from "./pages/hotel";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route
              path="/tours"
              element={
                <div className="flex justify-center items-center h-screen">
                  <h1 className="text-3xl font-bold">Tours Page</h1>
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="text-4xl font-bold text-red-500 mb-2">
                    404 - Page Not Found
                  </h1>
                  <p className="text-gray-600">
                    Sorry, the page you’re looking for doesn’t exist.
                  </p>
                </div>
              }
            />
          </Route>
        </Routes>

        {/* React Query Devtools (for debugging API calls) */}
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
