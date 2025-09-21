


const usernamePage = document.querySelector('.username-dir')
const greetingPage = document.querySelector('.heading')

const myButton = document.getElementById('myButton')
const inputName = document.getElementById('input')
const greetingText = document.getElementById('h-text') 

const usernameCon = document.querySelector('.username-con')
const error = document.getElementById('error')

const purpleName = document.querySelector('.purple')


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

  let users = JSON.parse(localStorage.getItem('users')) || []

  if (name) {
    if (!users.includes(name)) {
      users.push(name)
    }
    localStorage.setItem('ime', name)
    localStorage.setItem('users', JSON.stringify(users))
  } else {
    name = localStorage.getItem('ime')
  }


  if (name) {
    localStorage.setItem('ime', name)
  } else {
    name = localStorage.getItem('ime')
  }

  // Original

  // if (sati >= 5 && sati < 12) {
  //   greetingText.textContent = 'Good Morning, ' + name
  // } else if (sati >= 12 && sati < 18) {
  //   greetingText.textContent = 'Good Afternoon, ' + name
  // } else {
  //   greetingText.textContent = 'Good Evening, ' + name
  // }


// Original



  if (sati >= 5 && sati < 12) {
    greetingText.innerHTML = 'Good Morning, <span class="purple">' + name + '</span>'
} else if (sati >= 12 && sati < 18) {
    greetingText.innerHTML = 'Good Afternoon, <span class="purple">' + name + '</span>'
} else {
    greetingText.innerHTML = 'Good Evening, <span class="purple">' + name + '</span>'
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
