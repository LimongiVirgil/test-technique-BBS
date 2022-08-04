import { MoonCardProps } from './types'

export const MoonCardArgs: MoonCardProps = {
  relatedMoons: [{ moon: 'La Lune', rel: 'https://api.le-systeme-solaire.net/rest/bodies/lune' }],
  style: { width: 250 + 'px' },
  onClick: () => console.log('Input clicked'),
}
