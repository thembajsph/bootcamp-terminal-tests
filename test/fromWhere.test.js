let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function checks which town a registration number is from' , function(){
    it('should return Bellville for registration CY' , function(){
    	var reg = 'CY';
        assert.equal(fromWhere(reg), 'Bellville')
    });
    it('should return Paarl for registration CJ', function(){
    	var reg = 'CJ';
        assert.equal(fromWhere(reg), 'Paarl')
    });
    it('should return Cape Town for registration CA' , function(){
    	var reg = 'CA';
        assert.equal(fromWhere(reg), 'Cape Town')
    });
    it('should return some other place for a different registration' , function(){
        var reg = 'CL';
        assert.equal(fromWhere(reg), 'Some other place!')
    });
});