// question  1.Return Negative
function ChecknegativeNumber(number){
    if(number === 0 || -0) return 0;
    else if(number < 0) return number;
    else return -1 * number
}
console.log(ChecknegativeNumber(2))  // result : -2
// question 2.Is the string uppercase?
function uperCaseChecker(str){
    if(str === str.toUpperCase()){
        return true;
    }
    return false;
}
uperCaseChecker('HEmLO') //result : false
