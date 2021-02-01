import { relatedCompanyApi } from '../api/relatedCompanyApi';

export const relatedCompanyQuery = async (industryQuery: string,sectorQuery: string, symbolQuery:string) => {
  try {
    const searchResults = await relatedCompanyApi(industryQuery,sectorQuery,symbolQuery);
    return searchResults;
  } catch (err) {
    console.error('Error in actions - related Query', err);
    return [];
  }
}