const jsonToSheet = localStorage.getItem("charSheet")
const sheet = JSON.parse(jsonToSheet)
console.log('Sheet : ', sheet)
//if i need to access a value i can use .value like sheet.name this will be == "name".

//declaring the html divs to write things on it
const charName = document.getElementById('charName')
const charProps = document.getElementById('charProps')

if (sheet.charclass == `Wizard`) {
    document.body.style.backgroundImage = "url('https://images3.alphacoders.com/104/thumb-1920-1043020.jpg')"
}
else if (sheet.charclass == `Rogue`) {
    document.body.style.backgroundImage = "url('https://static0.polygonimages.com/wordpress/wp-content/uploads/2024/09/04-016.rogue-v-dragon.png?w=1600&h=900&fit=crop')"
}
else {
    document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/human-eldritch-knight-of-dnd-t8lpzsjdmaxdv4vj.jpg')"
}

charName.innerHTML = sheet.name
charProps.innerHTML = `${sheet.charclass} | Level: ${sheet.level} <br>
 Hit Points : ${sheet.hp} | Armor Class : ${sheet.ac}`