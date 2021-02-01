import axios from 'axios';

export const relatedCompanyApi = async (industryQuery: string,sectorQuery: string, symbolQuery:String) => {
  console.log(industryQuery +" "+sectorQuery);
  const url = 'http://localhost:8080/related'

  try {
    const result = await axios.get(url, {
      params: {
        industry: industryQuery,
        sector:sectorQuery,
        symbol:symbolQuery
      },
      headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:8080',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    });

    return(result.data);
  } catch(e) {
    console.log("cant access "+e);
  }
}