import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import Root from "./components/Root";
import UpdateUser from "./components/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "users",
        element: <UserList />,
        children: [
          { path: "add-user", element: <CreateUser /> },
          { path: ":id", element: <UpdateUser /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
