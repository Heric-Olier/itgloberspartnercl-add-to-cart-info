import React from 'react'
import { useProduct } from 'vtex.product-context'//@ts-ignore
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup';
// import Totalizers from './Totalizers';



const AddToCartInfo = () => {
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();
  console.log("este producto tiene esta info", productInfo);
  console.log("este es el orderForm", items, totalizers);
  return (
    <>
      {items.map((item: any, index: number) => {
        return (
          <div key={index}>
            <img src={item.imageUrls.at1x} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.id}</p>
            <p>{item.price / 100}</p>
            <p>{item.quantity}</p>
          </div>
        )
      })
      }
      <div>
        <p>Subtotal items</p>
        <p>Total Shipping: {totalizers[0]?.value / 100}</p>
      </div>
      <ButtonGroup /> {/*Acciones*/}
    </>
  )
}

export default AddToCartInfo
