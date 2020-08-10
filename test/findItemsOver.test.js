let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function finds items above given threshold' , function(){
	it('threshold 25 should return bananas' , function(){
		var listThreshold = 25;
		var listItem = [
			{name:"apples",qty:15},
			{name:"pears",qty:2},
			{name:"bananas",qty:27},
			{name:"apples",qty:21}
						];
    assert.deepEqual(findItemsOver(listItem, listThreshold), [{'name':'bananas','qty':27}]);        
	});

	it('should return an empty array' , function(){
		var listThreshold = 40;
		var listItem = [
			{name:"grapes",qty:30},
			{name:"pears",qty:2},
			{name:"bananas",qty:27},
			{name:"apples",qty:35}
						];
    assert.deepEqual(findItemsOver(listItem, listThreshold), []);        
	});
	it('threshold 10 should return mango and strawberries' , function(){
		var listThreshold = 10;
		var listItem = [
			{name:"mango",qty:12},
			{name:"pears",qty:5},
			{name:"strawberries",qty:20},
			{name:"apples",qty:7}
						];
    assert.deepEqual(findItemsOver(listItem, listThreshold), [{'name':'mango','qty':12},{'name':'strawberries','qty':20}]);        
	});
  });