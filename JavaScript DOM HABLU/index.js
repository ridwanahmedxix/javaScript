 
// let ID1 = document.getElementById('ID1') ;
// ID1.innerHTML = 'Hello Bangladesh'
//  let paraTag1 = document.getElementsByClassName('paraTag1') [0 , 1 , 2] ;
//  paraTag1.innerHTML = 'hello bro'

// let heading = document.getElementsByName('heading2') [0] ;
// heading.innerHTML = 'Hello'


//   let Heading1 = document.getElementsByTagName('h1') [0] ;
//    Heading1.innerHTML = "Hello , This is Bangladesh"

//  document.querySelector('#heading2')

//  function ckMe() {
//     document.getElementById('')
//  }

// let pNote = document.querySelector('pNote') ;
// console.log(pNote.parentNode)

//  let parentDiv = document.querySelector('.parent-div') ;
//  console.log(parentDiv.children);

// let Current = document.querySelector('.curent')
// console.log(Current.previousElementSibling);

// let div = document.createElement('div') ;
//  div.className = "RidwanID"
// div.innerHTML = " <h1> Hello This ia a P Tag </h2> " ;
// document.body.appendChild(div)

// let div = document.createElement('div') ;
// div.id = "heading-h1"

// let text = document.createTextNode("Inner text into the div")
// div.appendChild(text) 

// let h1 = document.createElement('h1') ;
// div.appendChild(h1)
// h1.textContent = "HELLO , MY HEART IS BROKEN"
// document.body.appendChild(div)


//  let ul = document.createElement('ul') ;
//  ul.id = "menu" ;

// let li1 = document.createElement('li')
// li1.textContent = "Home" ;
// ul.appendChild(li1) ;

// document.body.appendChild(ul)

// let ul = document.createElement('ul') ;
// ul.id = "menu" ;

// let li1 = document.createElement('li') ;
// li1.textContent = "Home" ;
// ul.appendChild(li1) ;

// let li2 = document.createElement('li') ;
// li2.textContent = "About" ;
// ul.appendChild(li2) ;

// let li3 = document.createElement('li') ;
// li3.textContent = "Contact" ;
// ul.appendChild(li3)

// document.body.appendChild(ul)


// let script = document.createElement('script') ;
// script.src = "ridwan.js" ;
// document.body.appendChild(script)

// let div = document.createElement('div') ;
// div.id = "menu" ;

// let p = document.createElement('p') ;
// p.textContent = "HELLO BANGLADESH . HOW ARE YOU ?" ;
// div.appendChild(p)


// document.body.appendChild(div)


// let div = document.createElement('div') ;
// div.id = "menu" ;

// let p = document.createElement('p') ;
// p.innerHTML = "HELLO BANGLADESH . HOW ARE YOU ?" ;
// div.appendChild(p)


// document.body.appendChild(div)


// let menu = document.querySelector('#menu') ;

// function createMenu(name) {
//   let li = document.createElement('li')
//   li.textContent = name ;
//   return li ;
// }
// menu.appendChild(createMenu("ridwan"))
// menu.appendChild(createMenu("Ahmed"))
// menu.appendChild(createMenu("web developer"))


// let menu = document.querySelector('#menu') ;
// function CreateMenu (name) {
//     let li = document.createElement('li') ;
//     li.textContent = name ;
//     return li ;
// }
// menu.append(CreateMenu("Hello"))
// menu.append(CreateMenu("Bruh"))
// menu.append(CreateMenu("What are you doing"))


// let note = document.getElementById("note") ;
// console.log(note.textContent);

// let menu = document.querySelector("#menu") ;
// console.log(menu.innerHTML);

// let menu = document.querySelector('#menu') ;
// let p = document.createElement('p') ;
// p.innerHTML = "My name is ridwan"
// menu.appendChild(p)

// let menu = document.querySelector('#menu') ;
// menu.innerHTML = " <p> My name is rockstar rakib </p> "

// let menu = document.querySelector('#menu') ;
// let nam = ['Ridwan' , 'Web' , 'Developer' , 'Front' , 'End'] ;
// let fragment = new DocumentFragment()
// nam.forEach((name) => {
//     let li = document.createElement("li") ;
//     li.textContent = name ;
//     fragment.appendChild(li) ;
// })

// menu.appendChild(fragment) ;


let menu = document.querySelector('#menu') ;
let nam = ['RIDWAN' , 'NUSRAT' , 'TISHA' , 'NAIM' , 'AIDEED'] ;
let fragment = new DocumentFragment() ;
nam.forEach((name) => {
  let li = document.createElement("li") ;
  li.textContent = name ;
  fragment.appendChild(li)
})
menu.appendChild(fragment)













































