const fs = require('fs');
let countryInput = process.argv[2];

fs.readFile('./countries.json', 'utf8', (err, data) => {
  if (err) {
    console.log(`unable to read file: ${err}`)
    throw err;
  }

  const countries = JSON.parse(data)

  countries.forEach((cntry) => {
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

});
