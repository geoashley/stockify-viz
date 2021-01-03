import { aggregateLookUp } from '../api/aggregateApi';

export const aggregateQuery = async (industryQuery: string,sectorQuery: string) => {
  try {
    const searchResults = await aggregateLookUp(industryQuery,sectorQuery);
    return searchResults;
  } catch (err) {
    console.error('Error in actions - aggregateQuery', err);
    return [];
  }
}