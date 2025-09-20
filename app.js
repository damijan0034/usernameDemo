


const usernamePage = document.querySelector('.username-dir')
const greetingPage = document.querySelector('.heading')

const myButton = document.getElementById('myButton')
const inputName = document.getElementById('input')
const greetingText = document.getElementById('h-text') 

const usernameCon = document.querySelector('.username-con')
const error = document.getElementById('error')


function checkInput(){
  if(inputName.value === ''){
    error.style.display = 'flex'
    usernameCon.style.height = '391px'
  } else{
    greetingPage.style.display = 'flex'
    usernamePage.style.display = 'none'
  }
}



function pozdrav() {
  const sati = new Date().getHours()
  let name = inputName.value.trim()

  if (name) {
    localStorage.setItem('ime', name)
  } else {
    name = localStorage.getItem('ime')
  }

  if (sati >= 5 && sati < 12) {
    greetingText.textContent = 'Good Morning, ' + name
  } else if (sati >= 12 && sati < 18) {
    greetingText.textContent = 'Good Afternoon, ' + name
  } else {
    greetingText.textContent = 'Good Evening, ' + name
  }
}





myButton.addEventListener('click', () => {
checkInput()
  pozdrav()
})

inputName.addEventListener('keydown', function(event) {
  if(event.key === 'Enter'){
    checkInput()
    pozdrav()
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const storedName = localStorage.getItem('ime')
  if (storedName) {

    usernamePage.style.display = 'none'
    greetingPage.style.display = 'flex'
    pozdrav()

  }
})

// localStorage.clear()
