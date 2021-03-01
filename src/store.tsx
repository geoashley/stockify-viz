import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";
import Security from "./interfaces/security.interface";
import RelatedCompany from "./interfaces/relatedCompany.interface";
import Company from "./interfaces/company.interface";

export interface Store {
  selectedSecurity: Security | null;
  industryMarketCap: string | null;
  relatedCompanies: RelatedCompany[];
  error: string | null;
}

const initialState: Store = {
  selectedSecurity: null,
  industryMarketCap: null,
  relatedCompanies: [],
  error: null,
};
type Action = {
  type: string;
  payload: string | RelatedCompany[] | Company | Security;
};

export const Context = createContext<{
  state: Store;
  dispatch: (action: Action) => void;
}>({ state: initialState, dispatch: () => {} });

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Store;
