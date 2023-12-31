import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Phone from "./components/Home/Phone/Phone";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("http://localhost:5000/phones"),
        },
        {
          path: "/phones/:id",
          element: <Phone></Phone>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/phones/${params.id}`),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
