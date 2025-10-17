
const friendList = ['Dilip', 'Shamim', 'Jakir', 'Talha', 'Ridwan', 'Shohel', 'Dilip', 'Shamim', 'Jakir', 'Shohel'];

 function ignorDuplicate (friendList) {
    let newList = [] ;
   for( let i = 0 ; i < friendList.length ; i++) {
       const element = friendList[i] ;

       if(newList.includes(element) === false ){
          newList.push(element) ;
       }
   }
   return newList
 }
  const finalResult =  ignorDuplicate(friendList) ;
  console.log(finalResult);