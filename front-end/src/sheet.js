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
        if (response.class == `Wizard`) {
            document.body.style.backgroundImage = "url('https://images3.alphacoders.com/104/thumb-1920-1043020.jpg')"
        }
        else if (response.class == `Rogue`) {
            document.body.style.backgroundImage = "url('https://static0.polygonimages.com/wordpress/wp-content/uploads/2024/09/04-016.rogue-v-dragon.png?w=1600&h=900&fit=crop')"
        }
        else if (response.class == `Warrior`) {
            document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/human-eldritch-knight-of-dnd-t8lpzsjdmaxdv4vj.jpg')"
        }

        const propsTable = document.getElementById('propsTable')
        const row = propsTable.insertRow(1)
        var nameRow = row.insertCell(0)
        var hpRow = row.insertCell(1)
        var acRow = row.insertCell(2)
        var specieRow = row.insertCell(3)
        var levelRow = row.insertCell(4)
        var speedRow = row.insertCell(5)
        var classRow = row.insertCell(6)
        nameRow.innerHTML = response[0].name
        hpRow.innerHTML = response[0].hp
        specieRow.innerHTML = response[0].species
        classRow.innerHTML = response[0].class
        levelRow.innerHTML = response[0].level
        acRow.innerHTML = response[0].armor
        speedRow.innerHTML = response[0].speed
    })
})

// charName.innerHTML = sheet.name
// charProps.innerHTML = `${sheet.charclass} | ${sheet.charspecie} | Level: ${sheet.level} <br>
//  Hit Points : ${sheet.hp} | Armor Class : ${sheet.ac} | Speed : ${sheet.speed}ft`
