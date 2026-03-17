import Carousel from "../../Components/Carousel/Carousel";
import carouselImages from "../../Data/carouselImages";
import biryaniData from "../../Data/biryaniData";
import ProductCard from "../Products/ProductCard";
import { useOutletContext } from "react-router-dom";
import "./HomePage.css";


const HomePage = () => {

  // ✅ get cart + setCart from Outlet context
  const { cart, setCart } = useOutletContext();

  // ✅ add to cart function
  const addToCart = (item) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      return prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...prevCart, { ...item, quantity: 1 }];
  });
};


  return (
    <>
      {/* Carousel */}
     <div className="home-carousel">
  <Carousel images={carouselImages} />
</div>

      {/* Products Section */}
      <div className="container mt-5">
        <h2 className="mb-4">Our Special Biryanis</h2>

        <div className="row g-4">
          {biryaniData.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6">
              <ProductCard
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                onAddToCart={() => addToCart(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
