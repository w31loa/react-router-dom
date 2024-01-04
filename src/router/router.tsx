import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Posts, { postsLoader } from "../pages/Posts";
import SinglePost, { singlePostLoader } from "../pages/SinglePost";
import AddPost, { addPostAction } from "../pages/AddPost";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'posts',
          element: <Posts/>,
          loader: postsLoader
        },
        {
          path: 'posts/:id',
          element: <SinglePost/>,
          loader: singlePostLoader
        },
        {
          path: 'add',
          element: <AddPost/>,
          action: addPostAction
        },
      ]
    },
  ]);