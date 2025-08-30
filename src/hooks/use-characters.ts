import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../lib/api"

export function useCharacters(page: number) {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: () => getCharacters(page),
    staleTime: Infinity,  
    refetchOnWindowFocus: false,
    refetchOnMount: false,     
  })
}
