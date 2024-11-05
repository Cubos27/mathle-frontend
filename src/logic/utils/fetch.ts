import { SERVER_URL, SERVER_PORT } from './config';
const SERVER = `${SERVER_URL}:${SERVER_PORT}`;

export default async function fetchData( url: string, method: string = 'GET', data: any = null ) {
  console.log(`fetchData: ${ SERVER }/api/${ url }`);
  try {
    const response = await fetch( `${ SERVER }/api/${ url }`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify( data ) : null
    })
  
    if ( !response.ok ) {
      throw new Error( response.statusText )
    }
  
    return {
      status: response.status,
      data: await response.json()
    }
  } catch ( error ) {
    console.error(`
      Error fetching data: 
      ${ error }
    `)
    return null
  }
}