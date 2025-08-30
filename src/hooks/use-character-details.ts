import { useQuery } from "@tanstack/react-query"
import { getCharacterDetails } from "../lib/api"

export function useCharacterDetails(id: number) {
  return useQuery({
    queryKey: ["character-details", id],
    queryFn: () => getCharacterDetails(id),
    staleTime: Infinity,       
  })
}
