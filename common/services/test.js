const query = require('../services/querycsv')
const data = query.find(51.0216,-3.8749)
var assert = require('assert');
describe('find', function() {
    it('should return a JSON object if the correct parameters are p[assed to it', function () {
        assert((query.find(51.0216,-3.8749)!= null)) ;
    });
})