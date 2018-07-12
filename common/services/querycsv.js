const csv = require("csv-query");
module.exports = {
find: function(lat,lon){
    return new Promise(function (resolve, reject) {
        csv.createFromFile(
            __dirname + "/../../griddata/WPDNetworkMap.csv"
          ).then(function (db) {
            return db.findOne({ 
              Latitude: lat,
              Longitude: lon
            });
          }).then(function (record) {
            // Do some stuff
            resolve(record)
          }).catch(function (error) {
            throw error;
          });
    })
}

}