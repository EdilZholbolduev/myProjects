
// Convert part 
let input = document.querySelector('.input')
let btn = document.querySelector('.select-btn')
let bottomInner = document.querySelector('.bottom__inner')


let createTodo = ()=>{
   // firstly let's create a div for those inputs which will be saved in the div (.bottom__inner) which was creaed in the html file
   // method .createElement() is for creating a tag from Js, inside of the brackets we write what kind of tag is gonna be created
   let div = document.createElement('div')
   // let's create two buttons with value delete and edit, which are will be in the other div 
   let divButtons = document.createElement('div')
   let editButton = document.createElement('button')
   let deleteButton = document.createElement('button')
   let text = document.createElement('span')


   // we gonna set an attribute for created  tags via using method : .setAttribute(qualifiedName:'class or id ',value'name of for this class or id')
   div.setAttribute('class','bottom__inner-text')
   divButtons.setAttribute('class','inner-text__buttons')
   editButton.setAttribute('class','inner__buttons-edit')
   deleteButton.setAttribute('class','inner__buttons-delete')
   text.setAttribute('class','textTodo')


   // let's set the content name of delete and edit buttons
   editButton.innerHTML = 'edit'
   deleteButton.innerHTML = 'delete'
   // what should happen when we press edit and delete button 
   deleteButton.onclick=()=>div.remove()
   editButton.onclick=()=>{
      let edit=prompt(`edit : ${text.innerHTML}`).trim()
      edit === '' ? alert('you can not save empty input'):text.innerHTML = edit
   }
   // user shold not save empty input  
   if(input.value.trim() === ''){
      alert('you can not add empty input')
      return
   }
   // input of user should be shown in the (let) div 
   text.innerHTML = input.value 
   // after pressing add input space shoud stay empty, that's why we use this logic below:
   input.value = ''
   // let's push our edit and delete buttons to the div names as .inner-text__buttons
   divButtons.append(editButton,deleteButton)
   div.append(text, divButtons)
   // when user clicks on the text which was added, it should be crossed out
   text.onclick = ()=>{
      text.classList.toggle("crossOut")    
   }

   // then everything in the div, should be shown in the div (.bottom__inner) which was creaed in the html file before
   // prepend is same works as push method(prepend add from top, append adds from bottom)
   bottomInner.prepend(div) 
}

// when user will click add button, then fucntion createTodo should work
// In this situation createTodo is callback function
btn.addEventListener('click',createTodo)
// Now our input saves only when we click add btn, however we should also add enter keyboard
// keydown means, if keyboard gonna work then, event means which exact key 
window.addEventListener('keydown', (event)=>{
   if(event.code ==='Enter'){
      createTodo()
   }
})