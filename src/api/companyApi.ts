import axios from 'axios';

export const companyDetails = async (query: string) => {
  console.log(query);
  const url = 'http://localhost:7000/company/'

  try {
    const urlWithParm = url + query
    const result = await axios.get(urlWithParm, {
      params: {
      },
      headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:7000',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    });

    return(result.data);
  } catch(e) {
    console.log("cant access "+e);
  }
}