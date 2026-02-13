
//getting the values to put them in a dictionary or json.
const inputName = document.getElementById('charName')// our 'pointers'
const selectClass = document.getElementById('charClass')
const selectSpecie = document.getElementById('charSpecie')
const inputLevel = document.getElementById('charLevel')
const inputAc = document.getElementById('charAc')
const inputHp = document.getElementById('charHp')
const inputSpeed = document.getElementById('charSpeed')


//acessing our button so we can define its function
const buttonConfirm = document.getElementById('buttonConfirm')

buttonConfirm.addEventListener('click', function () {
    const name = inputName.value
    const charClass = selectClass.value
    const charSpecie = selectSpecie.value
    const level = Number(inputLevel.value)
    const ac = Number(inputAc.value)
    const hp = Number(inputHp.value)
    const speed = Number(inputSpeed.value)

    const newSheet = {
        "name": name,
        "charclass": charClass.toLowerCase(),
        "charspecie": charSpecie.toLowerCase(),
        "level": level,
        "ac": ac,
        "hp": hp,
        "speed": speed
    }

    const sheetToJson = JSON.stringify(newSheet) //transformed my object into a json string

    //Connect our front-end to our back-end
    fetch("http://localhost:3000/sheets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", //declare the body as json
        },
        body: sheetToJson,

    }).then((response) => response.json()).then((response) => {
        localStorage.setItem("charSheet",JSON.stringify(response)) //can access when the back-end sends something back
    })

    // //SENDING OBJECTS TO ANOTHER JS FILE 
    localStorage.setItem("charSheetFe",sheetToJson)//sent my object with his "id" charSheet to the localStorage
    // //so i can access it now on my other js file.

    alert(`The sheet of the character ${name} was created. Redirecting to the sheet page.`)
    window.location.href="pages/sheet.html"//if you click the button you i'll be redirected to another page sheet.html
})
