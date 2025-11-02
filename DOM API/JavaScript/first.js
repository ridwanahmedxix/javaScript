// const result =  document.getElementsByTagName('h2') ;
// console.log(result);
// for( let i = 0 ; i < result.length ; i++){
//     console.log(result[i]);
// // }
// console.log(document.getElementsByTagName('span'));


// console.log(document.getElementsByTagName('li'));

// console.log(document.getElementById('hello'));

// const result = document.getElementById('hello') ;
// console.log(result);

// const result = document.getElementsByClassName('bd')
// console.log(result);


//  const result = document.querySelector('.hello')
// console.log(result);



//  const result = document.querySelectorAll('.hello')
// console.log(result);


//  const result = document.querySelector('#this').innerText = " This is Ridwan" ;
// console.log(result);



//  const result = document.querySelector('#this').innerHTML = "<h1> MY NAME IS RIDWAN </h1>" ;
// console.log(result);




//  const result = document.querySelectorAll('.hello')
// console.log(result);

// for( let i = 0 ; i < result.length ; i ++){
//    console.log( result[i].innerText = "Hablu Bhai");
// }





// const element1 = document.getElementById("headinh2").style.backgroundColor = "red" ;
// const element = document.getElementById("headinh2").style.color = "white" ;
// console.log(element);
// console.log(element1);

// const div = document.createElement("div");
// div.innerText = "This ia Div Tag" ;

// const body =  document.getElementById("bodyTag") ;
// const heading = document.createElement("h2") ;
// h2.innerText = "MY NAME IS RIDWAN " ;
// const body2 = document.getElementById("bodyTag") ;
// div.appendChild(heading)
// body.appendChild(div) ;

// const bodyTag = document.getElementById("bodyTag") ;
//  const div = document.createElement("div") ;
// div.innerHTML = `
//     <h1> This is Bangladesh </h1> 
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam?</p>


// ` ;

//  bodyTag.appendChild(div)


// function anotherFunc () {
//     document.getElementById('heading2').innerText = 'This is a Heading 2' ;
// }

//  function forDate () {
//    const forDate = document.getElementById('paraTag') ;
//    forDate.innerText = Date() ;
//  }

// const makeRed = () => {
//     document.body.style.backgroundColor = 'red' ;
// }
  
// const makeRedBTN = document.getElementById('make-red')
// makeRedBTN.onclick = function makeRed() {
//     document.body.style.backgroundColor = 'blue'
// }
// const makeWhiteBTN = document.getElementById('make-white')
// makeWhiteBTN.onclick = function makewhite () {
//     document.body.style.backgroundColor = 'white'
// }



//  document.getElementById('update-btn').addEventListener('click' , function() {
//     const inputField = document.getElementById('input-field') ;
//     const result = inputField.value ;
//     const defaultText = document.getElementById('heading-tag') ;
//     defaultText.innerText = result ;
//     inputField.value = '' ;
//  })

//  document.querySelector('forClick').addEventListener('click' , function() {

//  })

// document.getElementById('heading-tag').addEventListener('mouseup' , function(e) {
//   console.log(e);
// })

// document.getElementById('heading-tag').addEventListener('mouseleave' , function(e) {
//     console.log(e);
// })


// document.getElementById('heading-tag').addEventListener('mouseout' , function(e) {
//     console.log(e);
// })


//  document.getElementById('heading-tag').addEventListener('mouseenter' , function makingClick() {
//      console.log(makingClick);
//  })

// document.getElementById('heading-tag').addEventListener('mouseenter' , function(e) {
//   console.log(e);
// })

// document.getElementById('input-btn').addEventListener('keydown' , function (e) {
//     console.log(e);
// })


// document.getElementById('input-btn').addEventListener('keypress' , function (e) {
//     console.log(e);
// })


// document.getElementById('input-btn').addEventListener('blur' , function (e) {
//     console.log(e);
// })


// document.getElementById('input-btn').addEventListener('cut' , function (e) {
//     console.log(e);
// })

//  document.getElementById('input-btn').addEventListener('paste' , function (e) {     console.log(e); })



//  document.getElementById('input-btn').addEventListener('copy' , function (e) {     console.log(e); })

// document.getElementById('form-Tag').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e);
// })

// document.getElementById('comment-btn').addEventListener('click' , () => {
    
//     const commentBox = document.getElementById('text-area') ;
//     const commentBoxValue = commentBox.value ;
//     console.log(commentBoxValue);
//     const commentPlace = document.getElementById('comment-place') ;
//     const makePtag = document.createElement('h3') ;
//     makePtag.style.backgroundColor = 'blue' ;
//     makePtag.style.padding = '25px' ;
//     makePtag.style.color = 'white' ;
//     makePtag.style.borderRadius = '50px' ;
//     makePtag.style.margin = '10px 800px 10px 0px'
//     makePtag.innerText = commentBoxValue ;
//     commentPlace.appendChild(makePtag) ;
//     commentBox.valuen =('')  ;
// })

// document.getElementById('comment-btn').addEventListener('click' , () => {
//     const commentPlace = document.getElementById('comment-place') ;
//     const commentBoxValue = commentPlace.value
// } )


// const menuTag = document.getElementById('menu') ;
// const li = document.createElement('li') ;
// li.textContent = ('First') ;
// menuTag.insertBefore(li,menuTag.firstChild)




// const menuTag = document.getElementById('menu') ;
// const li = document.createElement('li') ;
// li.textContent = ('First') ;
// menuTag.insertBefore(li,menuTag.lastChild)

const menuTag = document.getElementById('menu') ;
const li = document.createElement('li') ;
li.textContent = ('First') ;
menuTag.insertBefore(li,menuTag.firstChild)