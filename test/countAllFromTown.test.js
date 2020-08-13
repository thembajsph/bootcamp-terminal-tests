let assert=require("assert");
let countAllFromTown=require("../countAllFromTown")
describe("Counts all number plates matching the location given.", function() {
  
  
    it("Should count 1 number plate that matches CF",function(){ 
        var reg ="CJ 124,CY 567,CL 345, CF 456, CL 341"
//var loc="CF"
        
        assert.deepEqual(countAllFromTown(reg), 1);
    });
    it("Should count 3 number plates that match CL",function(){ 
        var reg ="CL 124,CY 567,CL 345, CJ 456,CL 341";
      //  var loc ="CL";
    assert.equal(countAllFromTown(reg,loc),3);
});
it("Should count 2 number plates that match CK",function(){ 
    var reg ="CK 124,CK 567,CL 345, CJ 456,CL 341";
    var loc ="CK";
assert.sameMembers(countAllFromTown(reg,"CK 124,CK 567"));
});

});