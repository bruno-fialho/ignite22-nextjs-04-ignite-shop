import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

  const router = useRouter()

  console.log('router', JSON.stringify(router, null, 2));

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
          <Image 
            src={logoImg} 
            alt="" 
            style={{ cursor: router.pathname === "/"? 'default' : 'pointer' }} 
          />
        </Link>

        <CartButton onClick={() => {
          setIsAnimationOut(false);
          setIsShowCart(true);
        }}>
          <Handbag size={24} weight="bold" />

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
