import { useOutletContext, useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, setCart } = useOutletContext();
  const navigate = useNavigate();

  // 🔹 Increase quantity
  const increaseQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  // 🔹 Decrease quantity (min = 1)
  const decreaseQty = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  // 🔹 Remove item
  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // 🔹 Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🔹 Checkout
  const handleCheckout = () => {
    setCart([]);
    navigate("/success");
  };

  return (
    <div className="container cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-layout">

          {/* LEFT: CART ITEMS */}
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>

                {/* ✅ IMAGE FIXED */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />

                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <strong>₹{item.price}</strong>
                </div>

                <div className="cart-qty">
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT: PRICE DETAILS (ONCE – SWIGGY STYLE) */}
          <div className="cart-summary">
            <h4>Price Details</h4>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              className="btn btn-success w-100"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartPage;
