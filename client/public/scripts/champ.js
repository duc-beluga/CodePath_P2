const renderChamp = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch(`/champs`)
    const data = await response.json()
    const champContent = document.getElementById('champ-content')
    let champ
    champ = data.find(champ => champ.id === requestedID)
    if (champ) {
        document.getElementById('image').src = champ.image
        document.getElementById('name').textContent = champ.name
        document.getElementById('attack-dmg').textContent = 'Attack DMG: ' +  champ.attackDamage
        document.getElementById('attack-dmg').style.color = 'red'
        document.getElementById('health').textContent = 'Health: ' + champ.health
        document.getElementById('health').style.color = 'green'
        document.getElementById('backstory').textContent = champ.backstory
        document.getElementById('special-attack').textContent = champ.specialAttack
        document.getElementById('special-attack').style.fontWeight = 'bold'
        document.title = `Champ - ${champ.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Champs Available 😞'
        champContent.appendChild(message)
    }
}
renderChamp()