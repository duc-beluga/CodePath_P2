const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Heroes Of The Day'

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