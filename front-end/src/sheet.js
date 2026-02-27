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
       
        if (response[0].class == `wizard`) {
            document.body.style.backgroundImage = "url('https://images3.alphacoders.com/104/thumb-1920-1043020.jpg')"
        }
        else if (response[0].class == `rogue`) {
            document.body.style.backgroundImage = "url('https://static0.polygonimages.com/wordpress/wp-content/uploads/2024/09/04-016.rogue-v-dragon.png?w=1600&h=900&fit=crop')"
        }
        else if (response[0].class == `warrior`) {
            document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/human-eldritch-knight-of-dnd-t8lpzsjdmaxdv4vj.jpg')"
        }
        else if (response[0].class == `druid`) {
            document.body.style.backgroundImage = "url('https://images8.alphacoders.com/102/1022769.jpg')"
        }
        else if (response[0].class == `sorcerer`) {
            document.body.style.backgroundImage = "url('https://www.themarysue.com/wp-content/uploads/2023/06/sorceror.jpg?fit=1920%2C1080')"
        }
        else if (response[0].class == `warlock`) {
            document.body.style.backgroundImage = "url('https://assetsio.gnwcdn.com/0-dungeons-and-dragons-warlock-5e-guide.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp')"
        }
            
        const propsTable = document.getElementById('propsTable')
        const charPhoto = document.createElement('img')
        const editButton = document.getElementById('editButton')
        
        charPhoto.classList.add('image')

        if (response[0].class == 'warrior'){
            charPhoto.src =`../assets/warrior.png`
        }
        else if (response[0].class == 'druid'){
            charPhoto.src =`../assets/druid.png`
        }
        else if (response[0].class == 'rogue'){
            charPhoto.src =`../assets/rogue.png`
        }
        else if (response[0].class == 'sorcerer'){
            charPhoto.src =`../assets/sorcerer.png`
        }
        else if (response[0].class == 'warlock'){
            charPhoto.src =`../assets/warlock.jpg`
        }
        else if (response[0].class == 'wizard'){
            charPhoto.src =`../assets/wizard.png`
        }
        else{}

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
    })

})

// charName.innerHTML = sheet.name
// charProps.innerHTML = `${sheet.charclass} | ${sheet.charspecie} | Level: ${sheet.level} <br>
//  Hit Points : ${sheet.hp} | Armor Class : ${sheet.ac} | Speed : ${sheet.speed}ft`
