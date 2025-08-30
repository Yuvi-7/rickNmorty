const BASE_URL = import.meta.env.VITE_API_BASE_URL

if (!BASE_URL) {
  throw new Error('VITE_API_BASE_URL environment variable is required')
}

const fetchData = async (url: string) => {
  const response = await fetch(`${BASE_URL}${url}`);
  return response.json();
};

const getCharacters = async (page: number = 1) => {
    const response = await fetchData(`/character?page=${page}`);
    return response;
};


const getCharacterDetails = async (id: number = 1) => {
  const response = await fetchData(`/character/${id}`);
  return response;
};


export {  getCharacters, getCharacterDetails };