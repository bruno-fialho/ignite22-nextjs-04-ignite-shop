import Image from 'next/future/image'
import { Handbag, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

import logoImg from '../assets/logo.svg'

import { globalStyles } from '../styles/global'
import {
  CartBadge,
  CartBadgeText,
  CartButton,
  Container,
} from '../styles/components/header'
import Cart from './Cart'

globalStyles();

export default function Header() {
  const [isShowCart, setIsShowCart] = useState(false);
  const [isAnimationOut, setIsAnimationOut] = useState(false);

  function handleCloseCart() {
    setIsAnimationOut(true);
  }

  useEffect(() => {
    if (isAnimationOut) {
      setTimeout(() => { setIsShowCart(false) }, 499);
    }
  }, [isAnimationOut])

  return (
    <>
      <Container>
        <Image src={logoImg} alt="" />

        <CartButton onClick={() => {
          setIsAnimationOut(false);
          setIsShowCart(true);
        }}>
          <Handbag size={24} />

          <CartBadge>
            <CartBadgeText>
              3
            </CartBadgeText>
          </CartBadge>
        </CartButton>
      </Container>

      <Cart 
        isVisible={isShowCart}
        animation={isAnimationOut ? 'out' : 'in'} 
        onCloseCart={handleCloseCart} 
      />
    </>
  )
}
