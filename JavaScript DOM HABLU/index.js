 
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


// let menu = document.querySelector('#menu') ;
// let nam = ['RIDWAN' , 'NUSRAT' , 'TISHA' , 'NAIM' , 'AIDEED'] ;
// let fragment = new DocumentFragment() ;
// nam.forEach((name) => {
//   let li = document.createElement("li") ;
//   li.textContent = name ;
//   fragment.appendChild(li)
// })
// menu.appendChild(fragment)

// let menu = document.querySelector("#menu") ;
// let li = document.createElement("li") ;
// li.textContent = "Ridwan" ;
// menu.insertBefore(li , menu.firstElementChild)


// let menu = document.querySelector("#menu") ;
// let li = document.createElement("li") ;
// li.textContent = "Product" ;
// menu.insertBefore(li , menu.firstElementChild )

// let app = document.querySelector("#app") ;
// let names = ['This' , 'is' , 'my wife'] ;
//  let DomSceipt = names.map((name) => {
//     let li = document.createElement("li") ;
//     li.textContent = names ;
//     return li ;
// })
// app.append(...DomSceipt)

// let jpp = document.querySelector("#jpp") ;
// let games = ["VC" , "PUBG" , "C OF C" , "LUDU"] ;
// let BomScript = games.map((game) => {
//     let li = document.createElement("li") ;
//     li.textContent = games ;
//     return li ;
// })
// jpp.prepend(...BomScript)  ;


// let menu = document.querySelector("#menu") ;
// menu.insertAdjacentHTML("beforebegin" , "<h3> beforebegin </h3>")
// menu.insertAdjacentHTML("afterbegin" , "<h3> afterbegin </h3>")
// menu.insertAdjacentHTML("beforeend" ,  "<h3> beforeend </h3>")
// menu.insertAdjacentHTML("afterend" , "<h3> afterend </h3>")

// let menu = document.querySelector("#menu") ;
// let li = document.createElement("li") ;
// li.textContent = "Home" ;
// menu.replaceChild(li , menu.lastElementChild)


// let menu = document.querySelector("#menu") ;
// menu.removeChild(menu.lastElementChild)

// let menu = document.querySelector("#menu") ;
// let cloneNode = menu.cloneNode(true) ;
// cloneNode.id ="cloneID"
// document.body.appendChild(cloneNode)

// let menu = document.querySelector("#menu") ;
// let cloneNode = menu.cloneNode(true) ;
// cloneNode.id = "cloneId" ;
// document.body.appendChild(cloneNode) ;

// let div = document.querySelector("div") ;
// div.id = "menu" ;


// let btn = document.querySelector("#btn") ;
// if(btn){
//     btn.setAttribute("name" , "ridwan")
// }

// let btn = document.querySelector("#btn") ;
// if(btn){
//     let target = btn.getAttribute("target")
//     console.log(target);
// }


// let menu = document.querySelector("#menu") ;
// menu.style.color = "red" ;
// menu.style.backgroundColor = "blue" ;
// menu.style.padding = "30px" ;


// let menu = document.querySelector("#menu") ;
// let style = getComputedStyle(menu) ;
// console.log(style.fontSize);

// let p = document.querySelector("p") ;
// p.className = "ridwan" ;
// console.log(p.className);

// let menu = document.querySelector("#menu") ;
// menu.classList.add("ridwan" , "ahmed" , "nusrat") ;
// // menu.classList.remove("ahmed")
// menu.classList.replace("ahmed" , "update")
  
// let menu = document.querySelector("#menu")
// let width = menu.clientWidth ;
// let height = menu.clientHeight ;
// console.log(width,height);

// let menu = document.querySelector("#menu") ;
// let width = menu.clientWidth ;
// let height = menu.clientHeight ;
// console.log(width,height);


//  let menu = document.querySelector("#menu");
//   let width = menu.clientWidth;
//   let height = menu.clientHeight;
//   console.log(width, height);


// let btn = document.querySelector("#btn") ;
// btn.addEventListener("click" , function(e) {
//   alert("Hello !")
// })


// function clicked() {
//   document.body.style.backgroundColor = "red"
// }
// function unClicked() {
//     document.body.style.backgroundColor = "white"
// }

let btn = document.querySelector("#clicked") ;
btn.onclick = function() {
    alert("This can not Fuck")
}
let tm = document.querySelector("#tm") ;