import axios from 'axios';

export const searchCompany = async (query: string) => {
  console.log(query);
  const url = 'http://localhost:8080/search'

  try {
    const result = await axios.get(url, {
      params: {
        symbol: query
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