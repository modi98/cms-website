import { Link } from "preact-router/match";
import React from "react";
import "./style.css";

const ItemCategory = ({ prefix, categories }) => {
  return (
    <>
      {categories?.map((item, i) => (
        <Link
          href={`${prefix ? prefix : ''}/inventario/${item.details.title
            .replaceAll(" ", "-")
            .toLowerCase()}`}
        >
          <div
            key={i}
            className="card border-0"
            style={{ width: "10rem", height: "12rem" }}
          >
            <img
              className="card-img-top card-image-container"
              src={item.details.image}
              alt="Card image cap"
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h6 className="card-title"> {item.details.title} </h6>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default ItemCategory;
