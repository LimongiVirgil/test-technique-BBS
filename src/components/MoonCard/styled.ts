import styled from 'styled-components'

export const Div = styled.div`
  margin-bottom: 1rem;
`

export const DivCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SubTitle = styled.h2`
  ${(props) => ({ ...props.theme.typography.largeBold })}
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  margin: 0 0 1.5rem;
`

export const TextError = styled.p`
  ${(props) => ({ ...props.theme.typography.mediumStrong })}
  color: ${(props) => props.theme.palette.colors.tomato};
  margin: 0rem 0 1rem 0;
`
