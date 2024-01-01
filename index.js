#!/usr/bin/env node

const getCoordinates = require('./coordinates')
const getWeather = require('./weather')

async function main() {
    // read location as a command line arguments
    const location = (process.argv[2]);
    
    // get latitude & longitude of the location using geocoding APIs
    const coordinates = await getCoordinates(location);

    // use coordinates to get weather details using weather APIs
    const { weather, temperature, feelslike } = await getWeather(coordinates.latitude, coordinates.longitude)
    
    // display weather details as standard output
    console.log(`It is ${weather} today in ${location}. It's ${temperature}°C but it feeslike ${feelslike}°C.`);
}

main()