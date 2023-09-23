const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'
headerContainer.style.backgroundImage = "url('https://img.freepik.com/free-vector/cosmic-background-alien-planet-deserted-landscape-with-mountains_107791-6400.jpg')";

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Champs'
headerTitle.style.color = 'white'

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

headerLeft.appendChild(headerTitle)

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)