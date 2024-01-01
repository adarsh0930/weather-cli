const axios = require('axios')

const getWeather = async (latitude, longitude) => { 
    const baseUrl = 'http://api.weatherstack.com/current'
    const accessToken = '4467f52e8945491d7c0f342d188febda'
    const url = `${baseUrl}?access_key=${accessToken}&query=${latitude},${longitude}`
    const response = await axios.get(url)
    const { temperature, feelslike, weather_descriptions } = response.data.current;
    return {
        temperature: temperature,
        feelslike: feelslike,
        weather: weather_descriptions
    }
}

module.exports = getWeather