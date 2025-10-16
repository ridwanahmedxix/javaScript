
const products = {
    name: "PHONE" ,
    color: "BLACK" ,
    price: 10000 
}
const keys = Object.keys(products) ;
for( let key of keys ) {
    console.log(products[key]);
}