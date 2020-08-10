module.exports = function findItemsOver20(item){ 
    var findIt = [];
    for(var i=0; i < item.length; i++){
     var list = item[i]
     if(item[i].qty > 20){
       findIt.push(list)
     }
     
    }
    return findIt
  };