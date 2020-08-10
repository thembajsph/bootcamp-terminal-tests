let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('The yearsAgo function calculates how many years ago a given date is' , function(){
    it('1976 should return 44 years ago' , function(){
    	var year = 1976;
        assert.equal(yearsAgo(year), 44);    
    });
     it('1815 should return 205 years ago' , function(){
    	var year = 1815;
        assert.equal(yearsAgo(year), 205);    
    });
      it('2010 should return 10 years ago' , function(){
    	var year = 2010;
        assert.equal(yearsAgo(year), 10);    
    });
});
