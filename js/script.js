var paragrafo = document.querySelector('.saida')
var texto = paragrafo.innerHTML
var index = 0

const escrever = () => {
  paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

  if (texto.length > index) {
    if (index == 0){
      paragrafo.innerHTML = texto.charAt(index) 
    } else {
      paragrafo.innerHTML += texto.charAt(index) 
    }

    paragrafo.innerHTML += '|'

    index++
    setTimeout(escrever, 120)

  } 
}


escrever()



const inputContainer = document.querySelector('input')
const rootElement = document.documentElement
const linkedinIcon = document.getElementById('linkedin-icon')
const githubIcon = document.getElementById('github-icon')
const instaIcon = document.getElementById('insta-icon')
const themeIcon = document.getElementById('theme-icon')



const light = {
    "--background-color" : "#FAF7FD",
    "--text-color" : "#41414D",
    "--icon-color" : "#41414D",
}

const dark = {
  "--background-color" : "#41414d",
  "--text-color" : "#FAF7FD",
  "--icon-color" : "#FAF7FD",
}

inputContainer.addEventListener('change', function(){
  const isChecked = inputContainer.checked
  
  if (isChecked){
    changeTheme(dark)
    linkedinIcon.src = '/assets/linkedin (2).png'
    githubIcon.src = '/assets/github (1).png'
    instaIcon.src = '/assets/instagram (3).png'
    themeIcon.src = '/assets/brightness (1).png'

  } else{
    changeTheme(light)
    linkedinIcon.src = '/assets/linkedin.png'
    githubIcon.src = '/assets/github.png'
    instaIcon.src = '/assets/instagram (2).png'
    themeIcon.src = '/assets/moon.png'

  }
  
})

function changeTheme(theme) {
  for(let prop in theme ) {
    changeProperty(prop, theme[prop])
  }
}

function changeProperty(property, value){
  rootElement.style.setProperty(property, value)
}