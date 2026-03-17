
import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from "../pages/AboutPage/AboutPage";
import Contact from "../pages/ContactPage/Contact";
import CartPage from "../pages/CartPage/CartPage";
import OrderSuccess from "../pages/OrderSuccess";
import Checkout from "../pages/CartPage/Checkout";




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
            element : <Checkout/>
        }
        
        
        ]
        }
    ]
)

export default my_router;

