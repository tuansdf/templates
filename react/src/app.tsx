import { QueryProvider } from "~/lib/react-query";
import { RouterProvider } from "~/lib/react-router";
import "~/styles/index.css";

export const App = () => {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
};
