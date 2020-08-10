module.exports = function fromWhere(reg){
    if (reg ==='CY'){
      return 'Bellville' 
    }
    else if (reg === 'CJ'){
      return 'Paarl' 
    }
    else if (reg === 'CA'){
      return 'Cape Town'
    }
    else {
      return 'Some other place!' 
    }
  };