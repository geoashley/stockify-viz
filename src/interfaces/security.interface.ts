import Company from "./company.interface";
import RelatedCompany from "./relatedCompany.interface";

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
    companyDetails: Company
  
  }