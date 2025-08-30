  export interface TypeCharacter {
    id: number
    name: string
    status: "Alive" | "Dead" | "unknown" | string
    species: string
    type: string
    gender: "Female" | "Male" | "Genderless" | "unknown" | string
    origin: { name: string; url: string }
    location: { name: string; url: string }
    image: string
    episode: string[]
    url: string
    created: string
  }
