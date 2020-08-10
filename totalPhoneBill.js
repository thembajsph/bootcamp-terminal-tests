module.exports = function totalPhoneBill(bill){
    var billCost = bill.split(",")
    var total = 0;
     for(var i=0; i< billCost.length; i++){
         var tote = billCost[i].trim();
       if(tote === "call"){
       total += 2.75;
       }
       if(tote === "sms"){
         total += 0.65;
       } 
     }
     return("R" + total.toFixed(2))
   };
   