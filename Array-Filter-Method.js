
const herosName = [
    { name : " Ridawn " , age : 18 , profession : " Web Developer"} ,
    { name : " Shamim " , age : 20 , profession : " s Developer"} ,
    { name : " Joni " , age : 38 , profession : "  Developer"} ,
    { name : " roni " , age : 18 , profession : " Web Developer"} ,
    { name : " sani " , age : 28 , profession : " s Developer"} ,
    { name : " jami " , age : 50 , profession : " Developer"}
] ;

 const singleHero = herosName.filter( (hero) => hero.profession == " Web Developer") ;
 console.log(singleHero);