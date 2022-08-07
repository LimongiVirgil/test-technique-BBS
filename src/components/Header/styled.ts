import styled from 'styled-components'

export const Header = styled.header`
  text-align: center;
`
export const Text = styled.p`
  ${(props) => ({ ...props.theme.typography.mediumStrong })}
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  margin: 5px 0 20px;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
