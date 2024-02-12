import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./components/Root";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "users", element: <UserList /> },
      { path: "add-user", element: <CreateUser /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
