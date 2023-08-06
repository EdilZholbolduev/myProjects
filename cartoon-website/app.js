let skills = document.querySelector('#skills')
let play = document.querySelector('#play')
let middle2 = document.querySelector('.inner__middle2')
let middle3 = document.querySelector('.inner__middle3')
let video = document.querySelector('.video')


let click = () => {
   let div = document.querySelector('.all-skills') 
   if (!div) {
     div = document.createElement('div')
     let skill1 = document.createElement('div')
     let skill2 = document.createElement('div')
     let skill3 = document.createElement('div')
     let skill4 = document.createElement('div')
 
     skill1.innerHTML = 'Sense of smell'
     skill2.innerHTML = 'Combined Breathstyles'
     skill3.innerHTML = 'Demon Slayer Mark'
     skill4.innerHTML = 'Water Breathing'
 
     div.setAttribute('class', 'all-skills')
     skill1.setAttribute('class', 'skill-1')
     skill2.setAttribute('class', 'skill-2')
     skill3.setAttribute('class', 'skill-3')
     skill4.setAttribute('class', 'skill-4')

     middle2.style.marginBottom = '100px'
 
     middle2.prepend(div)
     div.prepend(skill1, skill2, skill3, skill4)
     skills.innerHTML = 'hide skills'
   } else {
     skills.innerHTML = 'skills'
     div.remove()
     middle2.style.marginBottom=''
     
   }
 }
 
 skills.addEventListener('click', click) 

let div2 = document.createElement('div')
div2.setAttribute('class','middle3')
middle3.prepend(div2)
div2.prepend(video)

let playVideo = ()=>{

  if (video.style.display === 'none') {
    video.style.display = 'block' 
    video.play()  
    play.innerHTML = 'stop'
    middle3.style.marginBottom = '100px'
  } else {
    video.style.display = 'none'
    video.pause() 
    video.currentTime = 0
    play.innerHTML = 'play'
    middle3.style.marginBottom=''
  }
}

 play.addEventListener('click', playVideo)

