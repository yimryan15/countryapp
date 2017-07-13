const fs = require('fs');

module.exports = {

  readAndParse: function (jsonFile, callback) {
    fs.readFile(jsonFile, 'utf8', (err, data) => {
      if (err) {
        console.log(`unable to read file: ${err}`)
        return callback(err)
      }

      let parsedData = JSON.parse(data)
      callback(null, parsedData)
    })
  }
}
