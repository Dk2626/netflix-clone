import React, { useState } from "react";
import "./PlansScreen.css";
import StripeCheckout from "react-stripe-checkout";

const PlansScreen = ({ user }) => {
  const [product, setProduct] = useState([
    {
      name: "Premium",
      description: "4K + HDR",
      price: 30,
      productBy: "netflix",
    },
    {
      name: "Standard",
      description: "1080p",
      price: 20,
      productBy: "netflix",
    },
    {
      name: "Basic",
      description: "720p",
      price: 10,
      productBy: "netflix",
    },
  ]);

  const makePayment = (token, product) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(`response`, response);
        const { status } = response;
        console.log(`status`, status);
      })
      .catch((err) => console.log(err));
  };

  console.log(`product`, product);
  return (
    <div className="plansScreen">
      {product.map((c, i) => {
        return (
          <div className="plansScreen__plan" key={i}>
            <div className="plansScreen__info">
              <h5>{c.name}</h5>
              <h5>{c.description}</h5>
            </div>
            <StripeCheckout
              email={user.email}
              stripeKey="pk_test_51J1lORSJ9OeY7QobQNQIDHXHvMZN7QSCpuybya0Oapi0OhQI6NEI5gYRVGhVXd6jdxWs5fJYFWrdoriKCCqVOxA700IdKUzKwn"
              token={(token) => makePayment(token, c)}
              amount={c.price * 100}
              name
              billingAddress
            >
              <button>Subscribe</button>
            </StripeCheckout>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
