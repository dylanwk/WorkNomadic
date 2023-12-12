const axios = require('axios')
import React from 'react'
import { getDestinationImage } from '../DestinationGetter';

const UserPage = async() => {
  const destinationName = 'Bali';
  const apiKey = 'AIzaSyC0CuwQE_EPaAFRbCKOHmMzGbosguOEr74';
  const cx = '123dc09aea7fb4e5c';
  
  const imageUrl: string | null = await getDestinationImage(destinationName, apiKey, cx);

  //const response: string = getDestinationImage(destinationName, apiKey, cx);
  
  const imageWidth = 300; // specify the desired width
  const imageHeight = 200; // specify the desired height

  return (
    <div>
      <img src={imageUrl} alt="Destination" width={imageWidth} height={imageHeight}  /> 
      </div>
  )
}

export default UserPage

// api key AIzaSyC0CuwQE_EPaAFRbCKOHmMzGbosguOEr74
// search engine id 123dc09aea7fb4e5c