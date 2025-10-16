
function sum( ) {
   let store = 0 ;
  for( let i = 0 ; i < arguments.length ; i++ ) {
   store = store + arguments[i]
  }
  console.log(store);
}
sum( 2 , 6 , 9 , 7, 8) ;