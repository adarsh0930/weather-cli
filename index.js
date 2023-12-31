const getCoordinates = require('./coordinates')

async function main() {
    // read location as a command line arguments
    const location = (process.argv[2]);
    
    // get latitude & longitude of the location using geocoding APIs
    const coordinates = await getCoordinates(location);

    // use coordinates to get weather details using weather APIs


    // display weather details as standard output
    console.log(coordinates);
}

main()