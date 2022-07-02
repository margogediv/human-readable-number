module.exports = function toReadable (number) {
    let arrNumber = new Array;
    arrNumber[0] = 'zero';
    arrNumber[1] = 'one';
    arrNumber[2] = 'two';
    arrNumber[3] = 'three';
    arrNumber[4] = 'four';
    arrNumber[5] = 'five';
    arrNumber[6] = 'six';
    arrNumber[7] = 'seven';
    arrNumber[8] = 'eight';
    arrNumber[9] = 'nine';
    arrNumber[10] = 'ten';
    arrNumber[11] = 'eleven';
    arrNumber[12] = 'twelve';
    arrNumber[13] = 'thirteen';
    arrNumber[14] = 'fourteen';
    arrNumber[15] = 'fifteen';
    arrNumber[16] = 'sixteen';
    arrNumber[17] = 'seventeen';
    arrNumber[18] = 'eighteen';
    arrNumber[19] = 'nineteen';
    arrNumber[20] = 'twenty';
    arrNumber[30] = 'thirty';
    arrNumber[40] = 'forty';
    arrNumber[50] = 'fifty';
    arrNumber[60] = 'sixty';
    arrNumber[70] = 'seventy';
    arrNumber[80] = 'eighty';
    arrNumber[90] = 'ninety';
    arrNumber[100] = 'hundred';

    for (i = 0; i <= 4; i++) {
        sotki = (number - (number % 100))/100;
        deciatki2 = number % 100;
        deciatki = (number % 100) - (number % 10);
        edinicy = number % 10;
    }

    if (sotki > 0) {
        if (deciatki > 0 && edinicy == 0) {
            let resalt = arrNumber[sotki] + ' ' + arrNumber[100] + ' ' + arrNumber[deciatki];
            return resalt;
        } else if (edinicy == 0 && deciatki == 0) {
            let resalt = arrNumber[sotki] + ' ' + arrNumber[100];
            return resalt;
        } else if (deciatki == 0) {
            let resalt = arrNumber[sotki] + ' ' + arrNumber[100] + ' ' + arrNumber[edinicy];
            return resalt;
        } else if (deciatki2 == 12) { 
            let resalt = arrNumber[sotki] + ' ' + arrNumber[100] + ' ' + arrNumber[12];
            return resalt;
        } else if (deciatki2 == 11) { 
            let resalt = arrNumber[sotki] + ' ' + arrNumber[100] + ' ' + arrNumber[11];
            return resalt;
        } else if (deciatki2 > 12 && deciatki2 < 20) {
            let resalt = arrNumber[sotki] + ' ' + arrNumber[100] + ' ' + arrNumber[deciatki2];
            return resalt; 
        } else {
            let resalt = arrNumber[sotki] + ' ' + arrNumber[100] + ' ' + arrNumber[deciatki] + ' ' + arrNumber[edinicy];
            return resalt;
        }
    } else {
        if (deciatki > 0 && edinicy == 0) {
            let resalt = arrNumber[deciatki];
            return resalt;
        } else if (deciatki == 0) {
            let resalt = arrNumber[edinicy];
            return resalt;
        } else if (deciatki2 == 12) { 
            let resalt = arrNumber[12];
            return resalt;
        } else if (deciatki2 == 11) { 
            let resalt = arrNumber[11];
            return resalt;
        } else if (deciatki2 > 12 && deciatki2 < 20) {
            let resalt = arrNumber[deciatki2];
            return resalt; 
        } else {
            let resalt = arrNumber[deciatki] + ' ' + arrNumber[edinicy];
            return resalt;
        }
    }
    
}
