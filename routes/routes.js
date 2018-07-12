'use strict'
var csv = require('../common/services/querycsv')
var appRouter = function (app) {
   
     
    app.get("/", function (req, res) {
        res.send({ message: 'Welcome to our the WpdGrid Test site' });
      });
    
    /**
    * @api {get} /api/v1/nearest
    * @apiVersion 1.0.0
    * @apiName nearest
    * @apiGroup Task
    *
    * @apiExample {js} Example usage:
    * 
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccessExample {json} Success response:
     *     HTTP 200 OK
     *     {
     *        null
     *      }
     *
     * @apiUse UnauthorizedError
    */
    app.get("/nearest", function (req, res) {
        res.render('index', {data: null, error: null});
    })


    /**
    * @api {post} /api/v1/nearest
    * @apiVersion 1.0.0
    * @apiName nearest
    * @apiGroup Task
    * 
    * @apiParam (Request body) {String} Latitude and Longitude values
    * 
    * @apiExample {js} Example usage:
    * const data = {
    *   "Latitude": 4567.87
    *  "Longitude": -567.87
    * }
    
    
    * 
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccessExample {json} Success response:
     *     HTTP 201 OK
     *     {
     *       "Network Reference ID":"15160","Substation Number":"260580","Substation Name":"Aaronsons","Asset Type":"Primary","Latitude":"51.0216","Longitude":"-3.8749"
     *      }
     *
     * @apiUse UnauthorizedError
    */

    app.post("/nearest", function (req, res) {
        var latitude = req.body['lat']
        var longitude = req.body['lon']
        var data;
        csv.find(latitude,longitude).then(response =>{
          //data = JSON.stringify(response,['Network Reference ID', 'Substation Number', 'Substation Name','Asset Type','Latitude','Longitude'])
          data = response
          res.render('index', {data: data, error: null});
        }).catch(err => {
            logger.error(err)
            res.render('index', {data: null, error: err});
          });
        
    })

    //all errors are handled below

app.get('*', function(req, res) {
    res. res.send({ message: 'An error has occurred.Please try again' });
  });
}
module.exports = appRouter;