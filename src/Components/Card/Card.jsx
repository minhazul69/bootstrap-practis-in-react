import React from "react";

const Card = ({ shoes }) => {
  console.log(shoes.name);
  const { name, price, img } = shoes;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <p>Price: {price} TK</p>
      </div>
    </div>
  );
};

export default Card;
