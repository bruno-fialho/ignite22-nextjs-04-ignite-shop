import Image from 'next/future/image'
import { X } from 'phosphor-react'

import {
  CartContainer,
  CartInfoContainer,
  CartList,
  CartTitle,
  CartTotalContainer,
  CartTotalTitle,
  CartTotalValue,
  CloseIconButton,
  ConfirmButtom,
  ImageWrapper,
  Product,
  ProductContent,
  ProductPrice,
  ProductText,
  QuantityContainer,
  QuantityTitle,
  QuantityValue,
  RemoveButton
} from '../styles/components/cart'
import camiseta1 from "../assets/1.png" 

interface CartProps {
  isVisible: boolean;
  animation: 'in' | 'out';
  onCloseCart: () => void;
}

export default function Cart({ isVisible, animation, onCloseCart}: CartProps) {
  return (
    <CartContainer animation={animation} isVisible={isVisible}>
      <CloseIconButton onClick={() => {
        onCloseCart();
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
  )
}
