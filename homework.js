res = sumDigits(1234);
function sumDigits(a) {
    let res = 0;
    while (a !== 0) {
        digit = a % 10;
        res += digit;
        a = Math.floor(a / 10);
    }
    return res;
    
}
console.log(`sum digits = ${res}`); //10

res = luckyNumber(1238711);
function luckyNumber(a) {
let res = 0;

    while (a !== 0) {
        res = a % 10 - res;
        a = Math.floor(a / 10);
    }
console.log(res === 0 ? true : false);
// if (res === 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }
 }

