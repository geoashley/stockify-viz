import Company from "./company.interface";
import { Ratios } from "./ratios.interface";

export default interface RelatedCompany {
    symbol: string,
    securityName: string,
    marketCap:string,
    lastSale:String,
    ratios: Ratios[]
  }