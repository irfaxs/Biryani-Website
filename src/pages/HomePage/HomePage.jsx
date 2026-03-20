import Carousel from "../../Components/Carousel/Carousel";
import carouselImages from "../../Data/carouselImages";
import biryaniData from "../../Data/biryaniData";
import ProductCard from "../Products/ProductCard";
import { useOutletContext } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {

  // ✅ get cart + setCart + search
  const { cart, setCart, search } = useOutletContext();

  // ✅ FIXED FILTER (SAFE + STRONG)
const filteredProducts = search
  ? biryaniData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  : biryaniData;
  // ✅ add to cart
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

      {/* Products */}
      <div className="container mt-5">
        <h2 className="mb-4">Our Special Biryanis</h2>

        <div className="row g-4">
          {filteredProducts.length === 0 ? (
            <h4>No food found 😢</h4>
          ) : (
            filteredProducts.map((item) => (
              <div key={item.id} className="col-md-4 col-sm-6">
                <ProductCard
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  onAddToCart={() => addToCart(item)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;