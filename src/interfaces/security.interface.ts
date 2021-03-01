import Company from "./company.interface";
import { Ratios } from "./ratios.interface";


export default interface Security {
    symbol: string,
    securityName: string,
    lastSale: string,
    netChange: string,
    percentChange: string,
    marketCap:string,
    ipoYear: string,
    volume: string,
    sector: string,
    industry: string,
    companyDetails: Company,
    ratios:Ratios[]
  
  }