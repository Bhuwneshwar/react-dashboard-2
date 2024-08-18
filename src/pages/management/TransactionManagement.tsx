import React, { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";
import { _addGrace } from "chart.js/helpers";

const img =
  "https://th.bing.com/th/id/OIP.ocuLRBitsZoOlaJgFkOO3wHaHa?rs=1&pid=ImgDetMain";
const orderItems: OrderItemType[] = [
  {
    name: "laptop 1",
    photo: img,
    _id: "jnlrho948yt1",
    price: 2000,
    quantity: 4,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "bhuwneshwar",
    address: "raurata",
    city: "katihar",
    country: "india",
    pinCode: 846886,
    status: "Processing",
    state: "bihar",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 2,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    OrderItems: orderItems,
    _id: "jnlrho948yt1",
  });

  //distracture all from the order
  const {
    name,
    address,
    city,
    country,
    pinCode,
    status,
    state,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
    _id,
  } = order;
  // update handler
  const updateHandler = () => {
    //update the order
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-management">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>
          {/* map the order */}
          {order.OrderItems.map((item) => {
            return (
              <ProductCard
                name={item.name}
                photo={item.photo}
                _id={item._id}
                quantity={item.quantity}
                price={item.price}
              />
            );
          })}
        </section>

        {/* design order and user info */}
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name {name}</p>
          <p>
            Address : {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal : ${subtotal}</p>
          <p>Discount : ${discount}</p>
          <p>Shipping Charges : ${shippingCharges}</p>
          <p>Tax : ${tax}</p>
          <p>Total : ${total}</p>
          <h5>Status Info</h5>
          <p>
            Status :{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>{" "}
        </article>
      </main>
    </div>
  );
};

//product card
const ProductCard = ({ name, photo, _id, price, quantity }: OrderItemType) => {
  return (
    <div className="transaction-product-card">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
};
export default TransactionManagement;
