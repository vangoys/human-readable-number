module.exports = function toReadable (number) {

        if (typeof number === 'string') {
          number = parseInt(number, 10);
        }
        if (typeof number === 'number' && !isNaN(number) && isFinite(number)) {
          number = number.toString(10);
        } 
        else {
          return 'This is not a valid number';
        }
      
        
        var digits = number.split('');
        var digitsNeeded = 3 - digits.length % 3;
        if (digitsNeeded !== 3) { 
          while (digitsNeeded > 0) {
            digits.unshift('0');
            digitsNeeded--;
          }
        }
      
        
        var digitsGroup = [];
        var numberOfGroups = digits.length / 3;
        for (var i = 0; i < numberOfGroups; i++) {
          digitsGroup[i] = digits.splice(0, 3);
        }
        console.log(digitsGroup) 
      
        var digitsGroupLen = digitsGroup.length;
        var numTxt = [
          [null,'one','two','three','four','five','six','seven','eight','nine'], 
          [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'], 
          [null,'one','two','three','four','five','six','seven','eight','nine'] 
        ];
        var tenthsDifferent = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
      
       
        for (var j = 0; j < digitsGroupLen; j++) {
          for (var k = 0; k < 3; k++) {
            var currentValue = digitsGroup[j][k];
            digitsGroup[j][k] = numTxt[k][currentValue]
            if (k === 0 && currentValue !== '0') {
              digitsGroup[j][k] += ' hundred ';
            } 
            else if (k === 1 && currentValue === '1') { 
              digitsGroup[j][k] = tenthsDifferent[digitsGroup[j][2]];
              digitsGroup[j][2] = 0; 
            }
          }
        }
      
        console.log(digitsGroup) 
      
        
        for (var l = 0; l < digitsGroupLen; l++) {
          if (digitsGroup[l][1] && digitsGroup[l][2]) {
            digitsGroup[l][1] += ' ';
          }
          digitsGroup[l].filter(function (e) {return e !== null});
          digitsGroup[l] = digitsGroup[l].join('');
        }
      
        console.log(digitsGroup) 
      
        
        var posfix = [null,'thousand','million','billion','trillion','quadrillion','quintillion','sextillion'];
        if (digitsGroupLen > 1) {
          var posfixRange = posfix.splice(0, digitsGroupLen).reverse();
          for (var m = 0; m < digitsGroupLen - 1; m++) { 
            if(digitsGroup[m]){ 
              digitsGroup[m] += ' ' + posfixRange[m];
            }
          }
        }
      
        console.log(digitsGroup) 
      
        
        return digitsGroup.join(' ')
      
      }; 
