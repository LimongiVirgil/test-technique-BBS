import styled from 'styled-components'

export const Text = styled.p`
  ${(props) => ({ ...props.theme.typography.mediumStrong })}
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  margin: 0rem 0 1rem 0;

  &::first-letter {
    text-transform: capitalize;
  }
`

export const TextError = styled(Text)`
  color: ${(props) => props.theme.palette.colors.redError};
`

export const Button = styled.button`
  ${(props) => ({ ...props.theme.typography.smallRegular })}
  color: ${(props) => props.theme.palette.colors.chambray};
  margin: 0;
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  padding: 5px;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.palette.colors.pureWhite};
    background-color: ${(props) => props.theme.palette.colors.chambray};
  }
`
