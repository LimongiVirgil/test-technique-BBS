import { BodyCardProps } from './types'

export const BodyCardArgs: BodyCardProps = {
  celestialBodyName: 'Terre',
  link: 'https://api.le-systeme-solaire.net/rest/bodies/terre',
  style: { width: 250 + 'px' },
  onClick: () => console.log('Input clicked'),
}
