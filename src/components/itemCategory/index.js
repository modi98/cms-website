import React from "react";
import "./style.css";

const ItemCategory = ({ categories }) => {
  const handleClick = (title) => {
    console.log(title);
  };
  return (
    <>
      {categories.map((item, i) => (
        <div key={i} className="card border-0" style={{ width: "10rem", height: "12rem" }} onClick={() => handleClick(item.title)} >
          <img
            className="card-img-top card-image-container"
            src={item.image}
            alt="Card image cap"
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h6 className="card-title"> {item.title} </h6>
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemCategory;
