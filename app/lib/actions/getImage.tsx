const axios = require('axios')

export async function getDestinationImage(destinationName: string) {
  const apiKey = process.env.IMAGE_API_KEY;
  const cx = '123dc09aea7fb4e5c';
  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(destinationName)}&cx=${cx}&searchType=image&key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data.items && response.data.items.length > 0) {
      const imageUrl: string = response.data.items[0].link;
      return imageUrl;
    } else {
      console.log('No image found for the destination.');
      return 'Error';
    }
  } catch (error) {


    console.error('Error fetching image:')
    return 'Error'
  }
}
