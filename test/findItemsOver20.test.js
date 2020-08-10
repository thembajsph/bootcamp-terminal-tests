let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function finds items with a quantity over 20' , function(){
	it('should return pears and bananas' , function(){
	var item = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
	assert.deepEqual(findItemsOver20(item), [{'name' : 'pears', 'qty' : 37}, {'name' : 'bananas', 'qty' : 27}]);        
	});

	it('should return apples and kiwi' , function(){
	var item = [
    {name : 'apples', qty : 35},
    {name : 'pears', qty : 15},
    {name : 'bananas', qty : 10},
    {name : 'kiwi', qty : 21},
];
	assert.deepEqual(findItemsOver20(item), [{'name' : 'apples', 'qty' : 35}, {'name' : 'kiwi', 'qty' : 21}]);        
	});
  });