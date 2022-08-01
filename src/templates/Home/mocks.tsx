import { HomeTemplateProps } from './index'

export const homeArgs: HomeTemplateProps = {
  planets: [
    {
      id: 'earth',
      name: 'Terre',
      englishName: 'Earth',
      bodyType: 'Planet',
      discoveredBy: '',
      discoveryDate: '',
    },
  ],
  onChange: () => console.log('Execute'),
  search: '',
}
