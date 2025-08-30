import { createFileRoute } from '@tanstack/react-router'
import { CharacterDetails } from '../components/CharacterDetails'

export const Route = createFileRoute('/character/$id')({
  component: CharacterDetails,
})

