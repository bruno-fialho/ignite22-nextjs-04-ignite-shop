import { styled, keyframes } from "..";

export const Container = styled('header', {
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
  color: '$gray300',

  position: 'relative',

  variants: {
    type: {
      empty: {
        color: '$gray500',
      },
      notEmpty: {
        color: '$gray300',

        '&:hover': {
          color: '$gray100',
        }
      }
    },
  },


})

export const CartBadge = styled('div', {
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  border: 'none',
  outlineWidth: '3px',
  outlineStyle: 'solid',
  outlineColor: '$gray900',
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
