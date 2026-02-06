import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Profile from "../pages/Profile"
import Template from "../Template";

// variable yg menyimpan daftar routing, di export biar bisa di pake di file lain
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        
        children: [
            {
                path: "/", // url path
                element: <App /> // file yang akan di tampilkan
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
])