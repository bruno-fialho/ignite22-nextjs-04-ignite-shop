import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { Handbag, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

import logoImg from '../assets/logo.svg'

import { globalStyles } from '../styles/global'
import {
  CartBadge,
  CartBadgeText,
  CartButton,
  CartContainer,
  CartInfoContainer,
  CartList,
  CartTitle,
  CartTotalContainer,
  CartTotalTitle,
  CartTotalValue,
  CloseIconButton,
  ConfirmButtom,
  Container,
  Header,
  ImageWrapper,
  Product,
  ProductContent,
  ProductPrice,
  ProductText,
  QuantityContainer,
  QuantityTitle,
  QuantityValue,
  RemoveButton
} from '../styles/pages/app'
import camiseta1 from "../assets/1.png" 

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isShowCart, setIsShowCart] = useState(false);
  const [isAnimationOut, setIsAnimationOut] = useState(false);

  useEffect(() => {
    if (isAnimationOut) {
      setTimeout(() => { setIsShowCart(false) }, 499);
    }
  }, [isAnimationOut])

  return (
    <Container>
      <Header>
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
      </Header>

      <Component {...pageProps} />

      {isShowCart && (
        <CartContainer animation={isAnimationOut ? 'out' : 'in'}>
          <CloseIconButton onClick={() => {
            setIsAnimationOut(true);
          }}>
            <X size={24} />
          </CloseIconButton>

          <CartTitle>Sacola de compras</CartTitle>

          <CartList>
            <Product>
              <ImageWrapper>
                <Image src={camiseta1} width={94} height={86} alt="" />
              </ImageWrapper>

              <ProductContent>
                <ProductText>Camiseta Beyond the Limits</ProductText>
                <ProductPrice>R$ 79,90</ProductPrice>
                <RemoveButton>Remover</RemoveButton>
              </ProductContent>
            </Product>

            <Product>
              <ImageWrapper>
                <Image src={camiseta1} width={94} height={86} alt="" />
              </ImageWrapper>

              <ProductContent>
                <ProductText>Camiseta Beyond the Limits</ProductText>
                <ProductPrice>R$ 79,90</ProductPrice>
                <RemoveButton>Remover</RemoveButton>
              </ProductContent>
            </Product>

            <Product>
              <ImageWrapper>
                <Image src={camiseta1} width={94} height={86} alt="" />
              </ImageWrapper>

              <ProductContent>
                <ProductText>Camiseta Beyond the Limits</ProductText>
                <ProductPrice>R$ 79,90</ProductPrice>
                <RemoveButton>Remover</RemoveButton>
              </ProductContent>
            </Product>
          </CartList>

          <CartInfoContainer>
            <QuantityContainer>
              <QuantityTitle>Quantidade</QuantityTitle>
              <QuantityValue>3 itens</QuantityValue>
            </QuantityContainer>
            <CartTotalContainer>
              <CartTotalTitle>Valor total</CartTotalTitle>
              <CartTotalValue>R$ 270,00</CartTotalValue>
            </CartTotalContainer>
          </CartInfoContainer>

          <ConfirmButtom>
            Finalizar compra
          </ConfirmButtom>
        </CartContainer>
      )}
    </Container>
  )
}
