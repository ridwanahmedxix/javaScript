const phones = [
  {id: 1, pName: 'iPhone 15 pro max', price: 165000},
  {id: 2, pName: 'itel p32 mobile', price: 165000},
  {id: 3, pName: 'symphony d36 mobile', price: 165000},
  {id: 4, pName: 'xiaomi 45 phone', price: 165000},
  {id: 5, pName: 'One plus', price: 165000},
  {id: 6, pName: 'oppo a45 Phone', price: 165000},
  {id: 7, pName: 'oppo M89 Mobile', price: 165000},
  {id: 8, pName: 'nokia B33', price: 165000},
  {id: 9, pName: 'Nokia W37', price: 165000},
  {id: 10, pName: 'one plus 5', price: 165000}
];

const findingPhone  = (phones , search) => {
    const matchingPhone = [] ;
   for( const phone of phones) {
    if(phone.pName.toLowerCase().includes(search.toLowerCase())) {
   matchingPhone.push(phone)
    }
   }
   return matchingPhone ;
} ;
const result =  findingPhone(phones , 'nokia') ;
console.log(result);