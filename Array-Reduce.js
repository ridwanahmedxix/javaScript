
const shopingCard = [
    {
        items : 'T-shert' , 
        price : 400 
    } ,
    
    {
        items : 'Watch' , 
        price : 1200
    } ,
    {
        items : 'Damble' , 
        price : 500 
    } ,
    {
        items : 'Pant' , 
        price : 600 
    } ,

]

 const totalPeice = shopingCard.reduce( (prevValue , items) => {
    return prevValue + items.price ;
} ,0 )
console.log(totalPeice);