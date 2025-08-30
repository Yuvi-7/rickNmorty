import { createFileRoute } from '@tanstack/react-router'
import { Character } from '../components/Character'

export const Route = createFileRoute('/characters/$page')({
  component: Character,
})

