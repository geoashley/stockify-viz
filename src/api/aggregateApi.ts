import axios from 'axios';

export const aggregateLookUp = async (industryQuery: string,sectorQuery: string) => {
  console.log(industryQuery +" "+sectorQuery);
  const url = 'http://localhost:8080/aggregate'

  try {
    const result = await axios.get(url, {
      params: {
        industry: industryQuery,
        sector:sectorQuery
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