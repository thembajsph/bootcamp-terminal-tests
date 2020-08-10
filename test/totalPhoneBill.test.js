let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill")

describe('The totalPhoneBill function calculates the total cost of a phone bill' , function(){
	it('should return total for 2 calls and 3 sms' , function(){
		var bill = 'call, sms, call, sms, sms'
    assert.equal(totalPhoneBill(bill), 'R7.45');        
	});
	it('should return total for 4 calls and 4 sms' , function(){
		var bill = 'call, sms, call, sms, sms, call, call, sms'
    assert.equal(totalPhoneBill(bill), 'R13.60');        
	});
	it('should return total for 10 calls and 1 sms' , function(){
		var bill = 'call, call, call, call, call, sms, call, call, call, call'
    assert.equal(totalPhoneBill(bill), 'R25.40');        
	});
  });