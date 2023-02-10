import React from "react";



const Totalizers = ({ totalizers }: any) => {
  const { id, name, value } = totalizers;
  console.log("este es el total", id, name, value);
  return (
    <>
      <div>
        <p>Subtotal items</p>
        <p>Total Shipping</p>
      </div>
    </>
  );
};

export default Totalizers;
