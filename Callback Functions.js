
const first = ( a , b , callback) => {
   setTimeout( () => {
    console.log( a + b );
    callback () ;
   } , 2000) ;
}
 
const second = () => {
    console.log(" Second - 2");
}

first( 5 , 6 , second) ;
