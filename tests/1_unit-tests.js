/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

   
  
const chai = require('chai');
const assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');
var convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
  
suite('Function convertHandler.getNum(input)', () => {
    
test('Whole number input', done => {
      const input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
test('Decimal Input', done => {
      const input = '32.1L';
      assert.equal(convertHandler.getNum(input), 32.1);
      done();
    });
    
test('Fractional Input', done => {
      const input = '3/2L';
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });
    
test('Fractional Input w/ Decimal', done => {
      const input = '3/2.5L';
      assert.equal(convertHandler.getNum(input), 1.2);
      done();
    });
    
test('Invalid Input (double fraction)', done => {
      const input = '3//2L';
      assert.isNull(convertHandler.getNum(input));
      done();
    });
    
test('No Numerical Input', done => {
      const input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', () => {
    
test('For Each Valid Unit Inputs', done => {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(ele => {
        assert.equal(convertHandler.getUnit(3 + ele), ele);
      });
      done();
    });
    
test('Unknown Unit Input', done => {
      assert.isNull(convertHandler.getUnit('asd'));
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', () => {
    
test('For Each Valid Unit Inputs', done => {
  
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', () => {
    
    test('For Each Valid Unit Inputs', done => {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['gallons','liters','miles','kilometers','pounds', 'kilograms'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', () => {
    
    test('Gal to L', done => {
      const input = [5, 'gal'];
      const expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', done => {
      const input = [5, 'L'];
      const expected = 1.3208;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', done => {
      const input = [5, 'mi'];
      const expected = 8.0467;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', done => {
      const input = [1, 'km'];
      const expected = 1.609;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', done => {
      const input = [10, 'lbs'];
      const expected = 22.045;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', done => {
      const input = [5, 'kg'];
      const expected = 11.0231;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});