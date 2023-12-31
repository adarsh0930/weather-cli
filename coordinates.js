axios = require('axios')

const getCoordinates = async (location) => {
    
    const accessToken = 'pk.eyJ1IjoiaWRlYWxzaW5naCIsImEiOiJjbHF0a3g0YTIyYTJ3MnFtd2loOWtsbDN4In0.dHKctMKGlhiwX_9GSFfHYw';
    const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
    const url = `${baseUrl}/${encodeURIComponent(location)}.json?access_token=${accessToken}&limit=1`;

    const response = await axios.get(url);
    const result = { 
        latitude : response.data.features[0].center[1],
        longitude : response.data.features[0].center[0],
        place: response.data.features[0].place_name
    }

    return result;

}

module.exports = getCoordinates;
