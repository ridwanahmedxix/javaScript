
function sumNumbers (number) {
    let sum = 0 ;
    for( let i = 1 ; i <= number ; i ++) {
    sum = sum + i ;
    console.log(i , sum);
    }
    return sum ;
  }
 const result =  sumNumbers(6) ;
 console.log(result);