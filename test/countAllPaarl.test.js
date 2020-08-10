let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function counts all registrations from Paarl' , function(){
	it('should count 3 number plates for Paarl starting with CJ' , function(){
		var paarlReg = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
    assert.equal(countAllPaarl(paarlReg), 3);        
	});
	it('should count 4 number plates for Paarl starting with CJ' , function(){
		var paarlReg = "CJ 345 123, CJ 2345, CL 123-546, CL 345, CJ 123, MP 546, CJ 666";
    assert.equal(countAllPaarl(paarlReg), 4);        
	});
	it('should count 6 number plates for Paarl starting with CJ' , function(){
		var paarlReg = "CJ 345 123, CJ 2345, CL 123-546, CL 345, CJ 123, MP 546, CJ 666, CA 795-2, CJ 54-365, CJ 170497";
    assert.equal(countAllPaarl(paarlReg), 6);        
	});
  });