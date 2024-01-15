import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

import UserCreate from "../components/Home/UserCreate";
import Main from "../Layouts/Main";
import NotFound from '../NotFound';
import UserUpdate from "../components/Home/UserUpdate";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<NotFound/>,
      children: [
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/user-create",
          element: <UserCreate/>
        },
        {
          path:"/user-update/:id",
          element:<UserUpdate/>,
          loader:({params}) => fetch(`http://localhost:8000/api/users/${params.id}/edit`)
        }
      ],
    },
  ]);
  