// 1 - Pending . 2 - Resolve . 3 - Reject .
  
const willMarry = false ;
 new Promise( ( resolve , reject) => {
    setTimeout( () => {
        if(willMarry) {
          resolve(' Shofolotah') ;
        }
        else{
            reject(' BerTho/ Sorry ')
        }
    } , 2000 )
 } ).then( (value) => {
    console.log(value);
 } ).catch( (error) => {
   console.log(error);
 } )
