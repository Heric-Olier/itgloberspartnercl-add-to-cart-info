import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const ButtonGroup = ({ blockClass }: { blockClass: string }) => {
  const footerButtonContainer = generateBlockClass(styles.container__footer__btn__container, blockClass)
  return (
    <div className={footerButtonContainer}>
      <a href='/'>CONTINUAR COMPRANDO</a>
      <a href="/">VER CARRITO</a>
    </div>
  )
}


export default ButtonGroup
