const fs = require('fs');
const parse = require('./json-file-reader.js')
const file = './countries.json'
let countryInput = process.argv[2];

parse.readAndParse(file, function(err, response) {
  response.forEach((cntry) => {
    if (countryInput == cntry.name) {
      console.log(`Country: ${cntry.name}`)
      console.log(`Top Level Domain: ${cntry.topLevelDomain}`)
      console.log(`Capital: ${cntry.capital}`)
      console.log(`Region: ${cntry.region}`)
      console.log(`Currencies: ${cntry.currencies}`)
      console.log(`Languages: ${cntry.languages}`)
      console.log(`Population: ${cntry.population}`)
    }
  })
})
