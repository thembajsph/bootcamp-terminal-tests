module.exports = function findItemsOver(listItem, listThreshold){
    var item1 = [];
    for(var i=0; i < listItem.length; i++){
      var itIs = listItem[i]
      if(itIs.qty > listThreshold){
        item1.push(itIs)
      }
      
      }
    return item1
  };