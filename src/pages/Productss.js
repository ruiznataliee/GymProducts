import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Productss = () => {
  const [items, setProducts] = useState([]);
  useEffect(() => {
    // Axios.get("http://localhost:3000/API/Products")
    Axios.get("./products.json")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="item-container">
    <>
      {" "}
      
      {items.map((val, index) => {
        return (
          <div className = 'card'key={index}>
            <img src={val.image} alt="photo" />
            <h2>{val.title}</h2>
            <p>{val.price}</p>
            <p>{val.description}</p>
            <p><button className="button">Add to Cart</button></p>
          </div>
        );
      })}
      
    </>
    </div>
  );
};
export default Productss;


