window.addEventListener('load', (event) => {
    const idChar = window.location.search.split('?id=')[1].split('&')[0]
    fetch(`${window.location.origin}/api/sheets/${idChar}`, { // searches on the id char
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        //fetch returns a promisse, so we use then if the promisse is sucessful
    }).then((response) => response.json()).then((response) => {
        console.log(response)
        document.title = `D&D Sheets | ${response[0].name}`
            
        const propsTable = document.getElementById('propsTable')
        const charPhoto = document.createElement('img')
        const editButton = document.getElementById('editButton')
        const deleteButton = document.getElementById('deleteButton')
        
        charPhoto.classList.add('image')

        
        const classImage = {
            warrior: "../assets/warrior.png",        
            warlock: "../assets/warlock.jpg",        
            rogue:  "../assets/rogue.png",        
            sorcerer: "../assets/sorcerer.png",
            druid: "../assets/druid.png",        
            wizard: "../assets/wizard.png"
        }

        charPhoto.src = classImage[response[0].class]

        const row = propsTable.insertRow(1)
        var photoRow = row.insertCell(0)
        var nameRow = row.insertCell(1)
        var hpRow = row.insertCell(2)
        var acRow = row.insertCell(3)
        var specieRow = row.insertCell(4)
        var levelRow = row.insertCell(5)
        var speedRow = row.insertCell(6)
        var classRow = row.insertCell(7)
        
        photoRow.appendChild(charPhoto)
        nameRow.innerHTML = response[0].name
        hpRow.innerHTML = response[0].hp
        specieRow.innerHTML = response[0].species
        classRow.innerHTML = response[0].class
        levelRow.innerHTML = response[0].level
        acRow.innerHTML = response[0].armor
        speedRow.innerHTML = response[0].speed
        
        
        editButton.onclick = () => {
            window.location.href=`../pages/update.html?id=${response[0].sheetid}`
        }
        deleteButton.onclick = () => {
            window.location.href=`../pages/delete.html?id=${response[0].sheetid}`
        }
    })

})

// charName.innerHTML = sheet.name
// charProps.innerHTML = `${sheet.charclass} | ${sheet.charspecie} | Level: ${sheet.level} <br>
//  Hit Points : ${sheet.hp} | Armor Class : ${sheet.ac} | Speed : ${sheet.speed}ft`
