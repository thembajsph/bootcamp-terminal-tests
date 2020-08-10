module.exports = function mostProfitableDepartment(profDep){
    var mostProfitableDep = {}
   
    for(var i=0; i < profDep.length; i++){
     var depProf = profDep[i].department;
     if(mostProfitableDep[depProf] === undefined){
        mostProfitableDep[depProf] = 0
        }
      else{
      mostProfitableDep[depProf] += profDep[i].sales
      }
   }
    var mostSales = 0;
    var mostDep = "";
    for(var prop in mostProfitableDep){
    if(mostProfitableDep[prop] > mostSales){
        mostSales = mostProfitableDep[prop]
        mostDep   = prop;
     }
    }
    return mostDep;
  };