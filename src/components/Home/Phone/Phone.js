import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <h2>single phone</h2>
      <h4>name: {phone.name}</h4>
      <h4>price: {phone.price}</h4>
    </div>
  );
};

export default Phone;
