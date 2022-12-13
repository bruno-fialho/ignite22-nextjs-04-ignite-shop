import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useShoppingCart } from 'use-shopping-cart'
import { Handbag } from 'phosphor-react'

import logoImg from '../assets/logo.svg'
import Cart from './Cart'

import { globalStyles } from '../styles/global'
import {
  CartBadge,
  CartBadgeText,
  CartButton,
  Container,
} from '../styles/components/header'

globalStyles();

export default function Header() {
  const [isShowCart, setIsShowCart] = useState(false);
  const [isAnimationOut, setIsAnimationOut] = useState(false);

  const {
    cartCount,
  } = useShoppingCart()

  const router = useRouter()

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
        <Link href="/">
          <a>
            <Image 
              src={logoImg} 
              alt="" 
              style={{ cursor: router.pathname === "/"? 'default' : 'pointer' }} 
            />
          </a>
        </Link>

        <CartButton 
          onClick={() => {
            setIsAnimationOut(false);
            setIsShowCart(true);
          }}
          type={cartCount === 0 ? 'empty' : 'notEmpty'}
        >
          <Handbag size={24} weight="bold" />

          {cartCount > 0 && (
            <CartBadge>
              <CartBadgeText>
                {cartCount}
              </CartBadgeText>
            </CartBadge>
          )}
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
