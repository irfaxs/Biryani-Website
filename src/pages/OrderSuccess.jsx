import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-success mb-3">🎉 Order Placed Successfully!</h1>
      <p className="mb-4">
        Thank you for ordering. Your delicious biryani will arrive soon 🍽️
      </p>

      <Link to="/" className="btn btn-success">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
