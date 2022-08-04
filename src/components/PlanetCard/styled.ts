import styled from 'styled-components'

export const Div = styled.div`
  margin-bottom: 3rem;
`

export const SubTitle = styled.h2`
  ${(props) => ({ ...props.theme.typography.largeBold })}
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  margin: 0 0 1.5rem;
`
