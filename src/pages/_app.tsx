import { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart';

import Header from '../components/Header'

import { globalStyles } from '../styles/global'
import {
  Container,
} from '../styles/pages/app'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider cartMode="checkout-session" stripe={process.env.STRIPE_PUBLIC_KEY} currency="BRL" shouldPersist>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
