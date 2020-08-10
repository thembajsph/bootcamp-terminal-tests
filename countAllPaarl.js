module.exports = function countAllPaarl(paarlReg){
    var paarl = paarlReg.split(",")
    var reg = [];
        console.log(paarl)
    for(var i = 0; i < paarl.length; i++){
      var num = paarl[i].trim();
      if(num.startsWith("CJ")){
        reg.push(num)
      }
    }
     return reg.length
    
  }
  