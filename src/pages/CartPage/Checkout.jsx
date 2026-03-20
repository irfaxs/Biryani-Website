import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  const { cart, setCart } = useOutletContext();

  const handlePlaceOrder = (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Cart is empty ❌");
    return;
  }

  // ✅ Get logged-in user
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // ✅ Create new order
  const newOrder = {
    id: Date.now(),
    userEmail: user?.email,
    items: cart,
    total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    date: new Date().toLocaleString(),
    paymentMethod: paymentMethod
  };

  // ✅ Get existing orders
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // ✅ Add new order
  existingOrders.push(newOrder);

  // ✅ Save back
  localStorage.setItem("orders", JSON.stringify(existingOrders));

  // (optional old line — can remove if not needed)
  localStorage.setItem("orderItems", JSON.stringify(cart));

  // ✅ Clear cart
  setCart([]);

  // ✅ Redirect
  navigate("/success");
};

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        <h3 className="checkout-title">Checkout</h3>

        <form onSubmit={handlePlaceOrder}>

          {/* 📍 Address */}
          <div className="mb-4">
            <h5 className="section-title">Delivery Address</h5>

            {/* 📱 Phone Number */}
            <input
              type="tel"
              className="checkout-input form-control"
              placeholder="Enter your Phone Number"
              maxLength="10"
              pattern="[0-9]{10}"
              required
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />

            {/* 🏠 Address */}
            <input
              type="text"
              className="checkout-input form-control"
              placeholder="Enter your address"
              required
            />

            {/* 📍 City + Pincode */}
            <input
              type="text"
              className="checkout-input form-control"
              placeholder="Enter Pincode"
              maxLength="6"
              pattern="[0-9]{6}"
              required
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>

          {/* 💳 Payment */}
          <div className="mb-4">
            <h5 className="section-title">Payment Method</h5>

            <div className="payment-box form-check">
              <input
                type="radio"
                name="payment"
                className="form-check-input"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                required
              />
              <label className="form-check-label">
                Cash on Delivery
              </label>
            </div>

            <div className="payment-box form-check">
              <input
                type="radio"
                name="payment"
                className="form-check-input"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />
              <label className="form-check-label">
                UPI (Dummy)
              </label>
            </div>

            <div className="payment-box form-check">
              <input
                type="radio"
                name="payment"
                className="form-check-input"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <label className="form-check-label">
                Credit / Debit Card (Dummy)
              </label>
            </div>
          </div>

          {/* 🚀 Button */}
          <button
            type="submit"
            className="place-order-btn w-100"
          >
            Place Order
          </button>

        </form>

      </div>
    </div>
  );
};

export default Checkout;