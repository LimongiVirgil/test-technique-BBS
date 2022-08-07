import styled from 'styled-components'

export const Footer = styled.footer`
  text-align: center;
  width: 100vw;
  height: 40px;
  margin-top: 40px;
  background-color: ${(props) => props.theme.palette.colors.darkGrey};
`

export const Text = styled.p`
  color: ${(props) => props.theme.palette.colors.pureWhite};
`

export const A = styled.a`
  text-decoration: none;
  display: inline-block;
`
