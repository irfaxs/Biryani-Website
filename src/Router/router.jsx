
import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from "../pages/AboutPage/AboutPage";
import Contact from "../pages/ContactPage/Contact";
import CartPage from "../pages/CartPage/CartPage";
import OrderSuccess from "../pages/OrderSuccess";
import Checkout from "../pages/CartPage/Checkout";
import Login from "../pages/Login/LoginPage";
import Register from "../pages/Register/RegisterPage";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import MyOrders from "../pages/MyOrders/MyOrders";





const my_router = createBrowserRouter(
  [
        {
            element : <App/>,
            children : [
            {
            path : '/',
            element : <HomePage />
        },
        {
            path : '/about',
            element : <AboutPage/>
        },
         {
            path : '/contact',
            element : <Contact />
        },
        {
            path : '/cart',
            element : <CartPage/>
        },
         {
            path : '/success',
            element : <OrderSuccess/>
        },
         {
            path : '/Checkout',
             element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        )
        },
         {
            path : '/Login',
            element : <Login/>
        },
         {
            path : '/Register',
            element : <Register/>
        },
        {
         path: "/orders",
         element: <MyOrders />
        }
       
        
        
        ]
        }
    ]
)

export default my_router;

