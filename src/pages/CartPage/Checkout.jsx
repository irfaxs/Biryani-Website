import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Dummy payment success → redirect
    navigate("/success");
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Checkout</h3>

      {/* Address (Dummy) */}
      <div className="mb-4">
        <h5>Delivery Address</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter your address"
        />
        <input
          type="text"
          className="form-control"
          placeholder="City, Pincode"
        />
      </div>

      {/* Payment Method */}
      <div className="mb-4">
        <h5>Payment Method</h5>

        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          <label className="form-check-label">
            Cash on Delivery
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          <label className="form-check-label">
            UPI (Dummy)
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          <label className="form-check-label">
            Credit / Debit Card (Dummy)
          </label>
        </div>
      </div>

      <button
        className="btn btn-primary w-100"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
