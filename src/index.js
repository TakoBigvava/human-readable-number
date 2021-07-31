module.exports = function toReadable (number) {
    const newArr = String(number).split('');

    console.log(newArr)
      const humanNumber = function(numb){
       switch (numb) {
        case '1':
        return 'one';
        break;
        case '2':
        return 'two';
        break;
      case '3':
        return 'three';
        break;
      case '4':
        return 'four';
          break;
      case '5':
        return 'five';
        break;
      case '6':
        return 'six';
        break;
      case '7':
        return 'seven';
          break;
      case '8':
        return 'eight';
        break;
      case '9':
        return 'nine';
        break;
      default:
        console.log(`Sorry, no number ${numb}.`);
    }
      }
    
    const humanNumberDec = function(numb){
        switch (numb) {
        case '1':
        return 'ten';
        break;
        case '2':
        return 'twenty';
        break;
      case '3':
        return 'thirty';
        break;
      case '4':
        return 'forty';
          break;
      case '5':
        return 'fifty';
        break;
      case '6':
        return 'sixty';
        break;
      case '7':
        return 'seventy';
          break;
      case '8':
        return 'eighty';
        break;
      case '9':
        return 'ninety';
        break;
      default:
        console.log(`Sorry, no decimal ${numb}`);
    }
      }
    
    
    
    
    //0
    if(newArr.length === 1 && newArr[0] == 0){
      return "zero";
     }
    //x
    else if(newArr.length === 1){
      return humanNumber(newArr[0]);
     } 
     //xx except 10, 20, 30 ... and 1x
    else if(newArr.length === 2 && newArr[0] != 1 && newArr[1] != 0) {
      return `${humanNumberDec(newArr[0])} ${humanNumber(newArr[1])}`
    }
    
    //11
    else if(newArr.length === 2 && newArr[0] == 1 && newArr[1] == 1) {
      return `eleven`;
    }
    //12
    else if(newArr.length === 2 && newArr[0] == 1 && newArr[1] == 2) {
      return `twelve`;
    }
    //13
    else if(newArr.length === 2 && newArr[0] == 1 && newArr[1] == 3) {
      return `thirteen`;
    }
    //15
    else if(newArr.length === 2 && newArr[0] == 1 && newArr[1] == 5) {
      return `fifteen`;
    }
    //18
    else if(newArr.length === 2 && newArr[0] == 1 && newArr[1] == 8) {
      return `eighteen`;
    }
    //10
    else if(newArr.length === 2 && newArr[0] == 1 && newArr[1] == 0) {
      return `${humanNumberDec(newArr[0])}`
    }
    //all 12+ till 19
    else if(newArr.length === 2 && newArr[0] == 1 ) {
      return `${humanNumber(newArr[1])}teen`;
    }
    
    // 20, 30, 40
    else if(newArr.length === 2 && newArr[1] == 0) {
      return `${humanNumberDec(newArr[0])}`
    }
    
    else if(newArr.length === 3 && newArr[1] == 0 && newArr[2] != 0) {
      return `${humanNumber(newArr[0])} hundred ${humanNumber(newArr[2])}`;
    }
    
    //100, 200, 300...
    else if(newArr.length === 3 && newArr[1] == 0 && newArr[2] == 0) {
      return `${humanNumber(newArr[0])} hundred`
    }
    
    // 120, 230, 560....
    else if(newArr.length === 3 && newArr[1] != 0 && newArr[2] == 0) {
      return `${humanNumber(newArr[0])} hundred ${humanNumberDec(newArr[1])}`
    }
    // 111 311 411...
    else if(newArr.length === 3 && newArr[1] == 1 && newArr[2] == 1) {
      return `${humanNumber(newArr[0])} hundred eleven`;
    }
    // 212 312 412...
    else if(newArr.length === 3 && newArr[1] == 1 && newArr[2] == 2) {
      return `${humanNumber(newArr[0])} hundred twelve`;
    }
    // 213 313 413...
    else if(newArr.length === 3 && newArr[1] == 1 && newArr[2] == 3) {
      return `${humanNumber(newArr[0])} hundred thirteen`;
    }
    
    // 115 315 415....
    else if(newArr.length === 3 && newArr[1] == 1 && newArr[2] == 5) {
      return `${humanNumber(newArr[0])} hundred fifteen`;
    }
    
    // 218 318 418...
    else if(newArr.length === 3 && newArr[1] == 1 && newArr[2] == 8) {
      return `${humanNumber(newArr[0])} hundred eighteen`;
    }
    //417...
    else if(newArr.length === 3 && newArr[1] == 1) {
      return `${humanNumber(newArr[0])} hundred ${humanNumber(newArr[2])}teen`;
    }
    
    //345 543 788...
    else if(newArr.length === 3 && newArr[1] !== 0) {
      return `${humanNumber(newArr[0])} hundred ${humanNumberDec(newArr[1])} ${humanNumber(newArr[2])}`;
    }
    
        
}