/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = app => {
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
    
      if (!initNum && !initUnit) res.send('invalid number and/or unit');
      if (!initNum) res.send('Please input valid number');
      if (!initUnit) res.send('Please use valid unit');
    
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({initNum, initUnit, returnNum, returnUnit, string: toString})
    });
};
