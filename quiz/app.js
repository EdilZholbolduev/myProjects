// convert part from html class, id or tag names into JS variables(let)
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let btn6 = document.querySelector('.btn6')

let innerAnswer1 = document.querySelector('.inner__answer1')

let showAnswer=()=>{
   
   // lets create a div for showing answer
   let div = document.createElement('div')
   let text = document.createElement('span')
   // next i should give them class name or id
   div.setAttribute('class','answer__block')
   text.setAttribute('class','answer-text')
   // lets create answers of my quiz 
   let question1 = '2 + 2 * 2 = 2 + 4 = 6'
   let question2 = 'H2O is the chemical formula for water.'
   let question3 = 'There are five recognized oceans in the world.'
   let question4 = 'There are 6 commonly used and 2 rarely used datatypes'
   let question5 = 'In the English alphabet, there are five vowels'
   let question6 = 'The first President of the USA was G.Washington'

  

   btn1.onclick=()=>{
      if (text.textContent === '') {
         text.textContent = question1
         btn1.innerHTML = 'hide answer'
       } else {
         text.textContent = '';
         btn1.innerHTML='show answer'       
       }
   }
   btn2.onclick=()=>{
      if (text.textContent === '') {
         text.textContent = question2
         btn2.innerHTML = 'hide answer'
       } else {
         text.textContent = '';
         btn2.innerHTML='show answer'
       }
   }
   btn3.onclick=()=>{
      if (text.textContent === '') {
         text.textContent = question3
         btn3.innerHTML = 'hide answer'
       } else {
         text.textContent = '';
         btn3.innerHTML='show answer'
       }
   }
   btn4.onclick=()=>{
      if (text.textContent === '') {
         text.textContent = question4
         btn4.innerHTML = 'hide answer'
       } else {
         text.textContent = '';
         btn4.innerHTML='show answer'
       }
   }
   btn5.onclick=()=>{
      if (text.textContent === '') {
         text.textContent = question5
         btn5.innerHTML = 'hide answer'
       } else {
         text.textContent = '';
         btn5.innerHTML='show answer'
       }
   }
   btn6.onclick=()=>{
      if (text.textContent === '') {
         text.textContent = question6
         btn6.innerHTML = 'hide answer'
       } else {
         text.textContent = '';
         btn6.innerHTML='show answer'
       }
   }




   div.prepend(text)
   innerAnswer1.prepend(div)

}
showAnswer()

