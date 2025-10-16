
function sum() {
    if(arguments.length == 0) {
      console.log("Aeguments Note Found");
    } else{
        for( let i = 0 ; i < arguments.length ; i++ ) {
   store = store + arguments[i]
  }
  console.log(store);

    }
       
}
sum( 2 , 10) ;