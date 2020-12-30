import { searchCompany } from '../api/searchApi';

export const searchQuery = async (query: string) => {
  try {
    const searchResults = await searchCompany(query);
    return searchResults;
  } catch (err) {
    console.error('Error in actions - searchQuery', err);
    return [];
  }
}