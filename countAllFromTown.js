module.exports = function allFromTown(reg, loc) {
  var containerArray = [];
  var allReg = reg.split(",");
  for (var i = 0; i < allReg.length; i++) {
    var jj = allReg[i].trim()
  if (jj.startsWith(loc) ){
  containerArray.push(jj)
  
  
  }
  }
    //console.log(containerArray) 
  return containerArray;
  }
































// function countAllFromTown(count){
//   var towns = count.split(",")
//   var isEqual = [];
//   var isEqual2 = [];
//   var isEqual3 = [];
//   for(var i = 0; i < towns.length; i++){
//     var from = towns[i];
//     if(from.startsWith("CL")){
//       isEqual.push(from);
//     }
//      else if(from.startsWith("CF")){
//       isEqual2.push(from);
//     }
//     else if(from.startsWith("CJ")){ 
//       isEqual3.push(from);
//     }
//   }
//   console.log(isEqual.length)
//   console.log(isEqual2.length)
//   console.log(isEqual3.length)
// };





