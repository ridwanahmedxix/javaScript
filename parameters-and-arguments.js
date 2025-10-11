
const products =  {
     names : 'Laptop',
     price : 90000 ,
     color : 'White'
} ;

function addToProducts (anyObjects) {
       console.log( `Products name is ${anyObjects.names} and price is ${anyObjects.price} and color is ${anyObjects.color} ` );
}

addToProducts (products) ;