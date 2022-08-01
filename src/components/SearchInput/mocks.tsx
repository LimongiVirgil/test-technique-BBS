import { SearchInputProps } from './types'

export const searchInputArgs: SearchInputProps = {
  search: 'Lorem ipsum dolor sit amet.',
  placeholder: 'Entrer une recherche',
  onChange: () => console.log('Input value has been updated'),
}
