import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css"; // 👈 create this file

const OrderSuccess = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("orderItems");
    if (data) {
      setOrderItems(JSON.parse(data));
    }

    setOrderId(Math.floor(Math.random() * 100000));
  }, []);

  const totalAmount = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="order-page">
      <div className="order-container text-center">
        
        <h1 className="text-success mb-3">
          🎉 Order Placed Successfully!
        </h1>

        <p className="mb-2">
          Your delicious biryani will arrive soon 🍽️
        </p>

        {/* 🧾 Order ID */}
        <p className="fw-bold">Order ID: #{orderId}</p>

        {/* 🧾 Order Summary */}
        <div className="order-summary mt-4">
          <h4 className="mb-3">Order Summary</h4>

          {orderItems.length === 0 ? (
            <p>No items found</p>
          ) : (
            orderItems.map((item, index) => (
              <div key={index} className="order-item">
                
                <div className="order-left">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <div className="fw-semibold">{item.name}</div>
                    <small>Qty: {item.quantity}</small>
                  </div>
                </div>

                <div className="order-price">
                  ₹{item.price * item.quantity}
                </div>

              </div>
            ))
          )}
        </div>

        {/* 💰 Total */}
        <h4 className="mt-3">Total: ₹{totalAmount}</h4>

        <Link to="/" className="back-home-btn mt-4">
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default OrderSuccess;