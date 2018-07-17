const query = require('../common/services/querycsv')
const expect    = require("chai").expect;
const data = query.find(51.0216,-3.8749)
const assert = require('assert');

describe("JsonFindandConvert", function() {
    describe('find', function() {
        it('should return a JSON object if the correct parameters are p[assed to it', function () {
            assert((query.find(51.0216,-3.8749)!= null)) ;
        });
    })
})