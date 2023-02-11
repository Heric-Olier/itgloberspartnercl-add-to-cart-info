import React from 'react'
import { useProduct } from 'vtex.product-context'//@ts-ignore
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup';
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'
// import Totalizers from './Totalizers';

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const containerItem = generateBlockClass(styles.container__item, blockClass)
  const containerItemInfo = generateBlockClass(styles.container__item__info, blockClass)
  const containerItemImg = generateBlockClass(styles.container__item__img, blockClass)
  const containerFooter = generateBlockClass(styles.container__footer, blockClass)
  const containerFooterBtnCheckout = generateBlockClass(styles.container__footer__btn__checkout, blockClass)
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();
  console.log("este producto tiene esta info", productInfo);
  console.log("este es el orderForm", items, totalizers);
  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        return (
          <div key={index} className={containerItem}>
            <div className={containerItemImg}>
              <img src={item.imageUrls.at1x} alt={item.name} />
            </div>
            <div className={containerItemInfo}>
              <p>{item.name}</p>
              <p>${item.price / 100}</p>
              <p>Ref: {item.id}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        )
      })
      }
      <div className={containerFooter}>
        {/* <p>Subtotal items</p> */}
        <p>COMPRA TOTAL: ${totalizers[0]?.value / 100}</p>
        <a href="/checkout/#/cart" className={containerFooterBtnCheckout}>IR A PAGAR</a>
        <ButtonGroup blockClass={blockClass} />
      </div>
    </div>
  )
}

export default AddToCartInfo
