import { companyDetails } from '../api/companyApi';

export const companyDetailsQuery = async (query: string) => {
  try {
    const companyResults = await companyDetails(query);
    return companyResults;
  } catch (err) {
    console.error('Error in actions - companyQuery', err);
    return {};
  }
}