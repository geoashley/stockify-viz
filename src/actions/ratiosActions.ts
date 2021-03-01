import { ratiosDetails } from '../api/ratiosApi';

export const ratiosDetailsQuery = async (query: string) => {
  try {
    const ratios = await ratiosDetails(query);
    return ratios;
  } catch (err) {
    console.error('Error in actions - ratios Query', err);
    return {};
  }
}