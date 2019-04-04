/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  let initNumber = /^\d+\.?\d*\/?\d*\.?\d*$/;
  let initUnit = /([a-zA-Z]+)/
  this.getNum = input => {
    let result = input.split(initUnit, 2)[0];
    if(!result) { 
        return 1;
    } else if(!initNumber.test(result)) {
        return null;
    }
    const divide = result.split('/');
    if(divide.length > 1) return divide[0]/divide[1];
    return result;
  };
  
  this.getUnit = input => {
    let result = input.split(initUnit, 2)[1];
    if (!/^(gal|lbs|mi|l|kg|km)$/.test(result.toLowerCase())) {
      return null;
    }
    return result;
  };
  
  this.getReturnUnit = initUnit => {
    initUnit = initUnit.toLowerCase();
    if('gal' === initUnit) return 'l';
    if('l' === initUnit) return 'gal';
    if('lbs' === initUnit) return 'kg';
    if('kg' === initUnit) return 'lbs';
    if('mi' === initUnit) return 'km';
    if('km' === initUnit) return 'mi';
  };

  this.spellOutUnit = unit => {
    unit = unit.toLowerCase();
    if(unit === 'gal') return 'gallons';
    if(unit === 'l') return 'liters';
    if(unit === 'lbs') return 'pounds';
    if(unit === 'kg') return 'kilograms';
    if(unit === 'mi') return 'miles';
    if(unit === 'km') return 'kilometers';
  };
  
  this.convert = (initNum, initUnit) => {
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
   
    initUnit = initUnit.toLowerCase();
    
    if(initUnit === 'gal') return initNum * galToL;
    if(initUnit === 'l') return initNum / galToL;
    if(initUnit === 'lbs') return initNum * lbsToKg;
    if(initUnit === 'kg') return initNum / lbsToKg;
    if(initUnit === 'mi') return initNum * miToKm;
    if(initUnit === 'km') return initNum / miToKm;
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    return initNum + ' ' + initUnit + ' is successfully converted to ' + returnNum + ' ' + returnUnit;
  };
  
}

module.exports = ConvertHandler;
