// 1 - Pending . 2 - Resolve . 3 - Reject .
  
const willMarry = true ;
 new Promise( ( resolve , reject) => {
    setTimeout( () => {
        if(willMarry) {
          resolve(' Shofolotah') ;
        }
        else{
            reject(' BerTho/ Sorry ')
        }
    } , 2000 )
 } ).then( () => {
    console.log(" Promise korlam ");
 } ).catch( () => {
    console.log("Sorry , Ami Biye korte parbo na ");
 } )
