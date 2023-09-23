const renderChamps = async () => {
    const response = await fetch('http://localhost:3001/champs')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(champ => {
            const card = document.createElement('div')
            card.classList.add('card')  
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            topContainer.style.backgroundImage = `url(${champ.image})`
            //////////////////////////////////////////////////////////
            const bottomContainer = document.createElement('article')
            // bottomContainer.classList.add('bottom-container')
            const head = document.createElement('header')
            const foot = document.createElement('footer')
            bottomContainer.appendChild(head)
            
            const name = document.createElement('h5')
            name.textContent = champ.name
            head.appendChild(name)
            
            const backstory = document.createElement('p')
            backstory.textContent = champ.backstory
            bottomContainer.appendChild(backstory)
            
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.style.color = 'white'
            link.href = `http://localhost:3001/champs/${champ.id}`
            link.className = 'outline'
            
            foot.appendChild(link)
            bottomContainer.appendChild(foot)


            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderChamps()
}
