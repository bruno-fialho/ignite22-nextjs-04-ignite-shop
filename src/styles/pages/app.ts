import { styled, keyframes } from "..";

const slideInRight = keyframes({
  '0%': { 
    '-webkit-transform': 'translate3d(30rem, 0, 0)',
    transform: 'translate3d(30rem, 0, 0)',
    opacity: 0,
   },
  '100%': { 
    '-webkit-transform': 'translate3d(0, 0, 0)',
    transform: 'translate3d(0, 0, 0)',
    opacity: 1,
   },
});

const slideOutLeft = keyframes({
  '0%': { 
    '-webkit-transform': 'translate3d(0, 0, 0)',
    transform: 'translate3d(0, 0, 0)',
    opacity: 1
   },
  '100%': { 
    '-webkit-transform': 'translate3d(30rem, 0, 0)',
    transform: 'translate3d(30rem, 0, 0)',
    opacity: 0,
   },
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  overflow: 'hidden'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'space-between',
})

export const CartButton = styled('button', {
  width: '3rem',
  height: '3rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',

  backgroundColor: '$gray800',
  color: '$gray300', // notEmpty
  // color: '$gray500', // empty

  position: 'relative',

  '&:hover': {
    color: '$gray100', // notEmpty
  }
})

export const CartBadge = styled('div', {
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  border: 'none',
  outline: '3px solid $gray900',
  color: '$white',
  backgroundColor: '$green500',

  position: 'absolute',
  top: '-7px',
  right: '-7px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CartBadgeText = styled('span', {
  fontWeight: 'bold',
  fontSize: '0.875rem',
})

export const CartContainer  = styled('div', {
  width: '30rem',
  height: '100%',
  backgroundColor: '$gray800',
  padding: '4.5rem 3rem 3rem 3rem',

  zIndex: 999,
  position: 'absolute',
  top: 0,
  right: 0,

  overflow: 'hidden',

  display: 'flex',
  flexDirection:  'column',

  variants: {
    animation: {
      in: {
        animation: `${slideInRight} 500ms`
      },
      out: {
        animation: `${slideOutLeft} 500ms`
      }
    }
  }
})

export const CloseIconButton = styled('button', {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  color: '$gray500',
  background: 'transparent',
  border: 'none',

  cursor: 'pointer',

  '&:hover': {
    color: '$gray300',
  }
})

export const CartTitle  = styled('h3', {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '$gray100'
})

export const CartList = styled('div', {
  marginTop: '2rem',
  width: '100%',
  height: '100%',
  overflow: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const Product = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection:  'row',
  gap: '1.25rem'
})

export const ImageWrapper = styled('div', {
  width: '6.25rem',
  height: '5.75rem',
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProductContent = styled('div', {
  display: 'flex',
  flexDirection:  'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const ProductText = styled('p', {
  fontSize: '1.125rem',
  color: '$gray300'
})

export const ProductPrice = styled('p', {
  fontSize: '1.125rem',
  fontWeight: 'bold',
  color: '$gray100'
})

export const RemoveButton = styled('button', {
  color: '$green500',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',

  '&:hover': {
    color: '$green300',
  }
})

export const CartInfoContainer = styled('div', {
  width: '100%',
  
  display: 'flex',
  flexDirection: 'column',
})

export const QuantityContainer = styled('div', {
  width: '100%',
  
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'space-between',
})

export const QuantityTitle = styled('p', {})

export const QuantityValue = styled('p', {
  fontSize: '1.125rem',
  color: '$gray300'
})

export const CartTotalContainer = styled('div', {
  width: '100%',
  marginTop: '0.5rem',
  
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'space-between',
})

export const CartTotalTitle = styled('p', {
  fontSize: '1.125rem',
  fontWeight: 'bold',
})

export const CartTotalValue = styled('p', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const ConfirmButtom = styled('button', {
  marginTop: '3.5rem',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:hover': {
    backgroundColor: '$green300',
  }
})
