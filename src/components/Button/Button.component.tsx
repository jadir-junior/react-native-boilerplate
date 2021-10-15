import * as S from './Button.styles'

import React from 'react'

export type ButtonProps = {
  title: string
  color?: 'default' | 'primary'
}

const Button = ({ title, color = 'default' }: ButtonProps) => (
  <S.Button accessibilityLabel={title} color={color}>
    <S.ButtonText color={color}>{title}</S.ButtonText>
  </S.Button>
)

export { Button }
