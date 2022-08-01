import { PlanetTemplateProps } from './index'

export const planetArgs: PlanetTemplateProps = {
  details: {
    id: 'earth',
    name: 'Terre',
    discoveryDate: '23/07/1997',
    avgTemp: '13,7',
    dimension: '6 371 km',
    density: '5,51 g/cm³',
    gravity: '9,807 m/s²',
  },
  onNavigateBack: () => console.log('Execute'),
}
