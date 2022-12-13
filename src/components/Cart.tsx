import { useState } from 'react'
import Image from 'next/future/image'
import { useShoppingCart } from 'use-shopping-cart'
import { SpinnerGap, X } from 'phosphor-react'

import { api } from '../utils/api'

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

interface CartProps {
  isVisible: boolean;
  animation: 'in' | 'out';
  onCloseCart: () => void;
}

export default function Cart({ isVisible, animation, onCloseCart}: CartProps) {
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [status, setStatus] = useState('idle')
  const [cartTotal, setCartTotal] = useState('');

  const {
    cartDetails,
    removeItem,
    formattedTotalPrice,
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    redirectToCheckout,
    clearCart,
  } = useShoppingCart()

  const hasItemsInCart = !!cartCount

  function handleRemoveProductFromCart(id: string) {
    removeItem(id)
  }

  async function handleRedirectUserToCheckout() {
    try {
      setIsRedirecting(true)

      const response = await api.post('/api/checkout', {
        items: cartDetails,
      })

      const { checkoutSession } = response.data

      window.location.href = checkoutSession.url;
      clearCart()
    } catch (err) {
      alert('Falha ao redirecionar ao checkout')
      console.log(JSON.stringify(err, null, 2));
      setIsRedirecting(false)
    }
  }

  return (
    <CartContainer animation={animation} isVisible={isVisible}>
      <CloseIconButton onClick={() => onCloseCart()}>
        <X size={24} />
      </CloseIconButton>

      <CartTitle>
        {hasItemsInCart 
          ? 'Sacola de compras'
          : 'Você não tem nenhum item selecionado, que tal selecionar um?'
        }
      </CartTitle>

      <CartList>
        {Object.values(cartDetails).map(item => (
            <Product key={item.id}>
              <ImageWrapper>
                <Image src={item.image} width={94} height={86} alt="" />
              </ImageWrapper>

              <ProductContent>
                <ProductText>{item.name}</ProductText>
                <ProductPrice>{item.formattedValue}</ProductPrice>
                <RemoveButton onClick={() => handleRemoveProductFromCart(item.id)}>Remover</RemoveButton>
              </ProductContent>
            </Product>
        ))}
      </CartList>

      <CartInfoContainer>
        <QuantityContainer>
          <QuantityTitle>Quantidade</QuantityTitle>
          <QuantityValue>{cartCount} {cartCount === 1 ? 'item' : 'itens'}</QuantityValue>
        </QuantityContainer>
        <CartTotalContainer>
          <CartTotalTitle>Valor total</CartTotalTitle>
          <CartTotalValue>{formattedTotalPrice}</CartTotalValue>
        </CartTotalContainer>
      </CartInfoContainer>

      <ConfirmButtom
        disabled={!hasItemsInCart || isRedirecting}
        onClick={handleRedirectUserToCheckout}
      >
        {isRedirecting ? <SpinnerGap size={22} /> : 'Finalizar compra'}
      </ConfirmButtom>
    </CartContainer>
  )
}
