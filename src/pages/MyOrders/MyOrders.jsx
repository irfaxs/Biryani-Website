import { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    const userOrders = allOrders.filter(
      (order) => order.userEmail === user?.email
    );

    setOrders(userOrders);
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found 😢</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="card p-3 mb-3">
            <h5>Order ID: {order.id}</h5>
            <p>Date: {order.date}</p>
            <p>Total: ₹{order.total}</p>

           <div className="order-items">
  {order.items.map((item, i) => (
    <div key={i} className="d-flex align-items-center gap-3 mb-2">
      
      <img
        src={item.image}
        alt={item.name}
        width="60"
        height="60"
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />

      <div>
        <p className="mb-0 fw-semibold">{item.name}</p>
        <small>Qty: {item.quantity}</small>
      </div>

    </div>
  ))}
</div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;