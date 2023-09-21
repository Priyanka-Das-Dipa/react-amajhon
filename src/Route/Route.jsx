import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayOut from "../LayOut/MainLayOut";
import Products from "../Products/Products";
import Product from "../pages/Product/Product";

const myCreateRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: "/products/:id",
                element: <Product></Product>,
                loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path: "/dashboard",
                element: <div>this is dashboard</div>
            }
            
        ]
    }
])



export default myCreateRouter;