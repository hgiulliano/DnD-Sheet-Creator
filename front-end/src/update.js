async function getFetch(url) {
    try{
        const response = await fetch((url),{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        return response.json()
    }
    catch(error){
        console.log('Fetch Failed,',error)
    }
}

async function updateFetch(url,stringBody) {
    try{
        const response = await fetch((url), {
            method : "PATCH",
            headers : {
                "Content-type" : "application/json"
            },
            body : stringBody
        })
    }
    catch(error){
        console.log('Fetch failed',error)
    }
}

//create another fetch function (patch)

const inputId = document.getElementById('charID')
const nextButton = document.getElementById('nextButton')
const charInfos = document.getElementById('charInfos')
const charInfosMessage = document.getElementsByClassName('charInfosMessage')


nextButton.onclick = async () => {
    const charID = inputId.value
    const response = await getFetch(`http://localhost:3000/api/sheets/${charID}`)
    try{
        charInfosMessage[0].innerHTML = `Here's your character stats, you can edit the properties that you want!`
        charInfos.innerHTML = `
        <label for="charName">Name:
        <input type="text" id="charName" name="name" value="${response[0].name}">
        </label>
        <br>
        <label for="charSpecies">Specie:
            <select name="Specie" id="charSpecie">
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
            <option value="drow">Drow</option>
            </select>
        </label>
        <br>
        <label for="charClass">Class:
            <select name="Class" id="charClass">
            <option value="warrior">Warrior</option>
            <option value="rogue">Rogue</option>
            <option value="wizard">Wizard</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="druid">Druid</option>
            </select>
        </label>
        <br>
        <label for="charHp">Hp:
        <input type="text" id="charHp" name="hp" value="${response[0].hp}">
        </label>
        <br>
        <label for="charLevel">Level:
        <input type="text" id="charLevel" name="level" value="${response[0].level}">
        </label>
        <br>
        <label for="charAc">AC:
        <input type="text" id="charAc" name="ac" value="${response[0].armor}">
        </label>
        <br>
        <label for="charSpeed">Speed:
        <input type="text" id="charSpeed" name="speed" value="${response[0].speed}">
        </label>
        `

        //we can use this to make the select value already selected
        document.getElementById('charSpecie').value = response[0].species
        document.getElementById('charClass').value = response[0].class

        const newName = document.getElementById('charName')
        const newSpecie = document.getElementById('charSpecie')
        const newClass = document.getElementById('charClass')
        const newHp = document.getElementById('charHp')
        const newLevel = document.getElementById('charLevel')
        const newSpeed = document.getElementById('charSpeed')
        const newAc = document.getElementById('charAc')

        nextButton.classList.add('hidden')

        const sendUpdate = document.getElementById('sendUpdate')
        sendUpdate.classList.remove('hidden')
        console.log(response[0])
        console.log(response[0].id)
        sendUpdate.onclick = async () => {
            const newValues = {
                "name": newName.value,
                "class": newClass.value.toLowerCase(),
                "species": newSpecie.value.toLowerCase(),
                "level": Number(newLevel.value),
                "armor": Number(newAc.value),
                "hp": Number(newHp.value),
                "speed": Number(newSpeed.value)
            }
            const stringBody = JSON.stringify(newValues)
            const newResponse = await updateFetch(`http://localhost:3000/api/sheets/${response[0].sheetid}`,stringBody)
            alert('Character updated.')
            window.location.reload()
        }
        // //create inputs catch the inputs values and send it by fetch patch and query them to the postgresdb
    }
    catch(error){
        alert('Please enter a valid character ID',error)
    }
}