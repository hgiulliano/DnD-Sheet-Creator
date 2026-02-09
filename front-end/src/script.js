//getting the values to put them in a dictionary or json.
const inputName = document.getElementById('charName')// our 'pointers'
const inputLevel = document.getElementById('charLevel')
const inputAc = document.getElementById('charAc')
const inputHp = document.getElementById('charHp')
const selectClass = document.getElementById('charClass')

//acessing our button so we can define its function
const buttonConfirm = document.getElementById('buttonConfirm')

buttonConfirm.addEventListener('click', function(){
    const name = inputName.value
    const level = Number(inputLevel.value)
    const ac = Number(inputAc.value)
    const hp = Number(inputHp.value)
    const charClass = selectClass.value
    
    const newSheet = {
        "name" : name,
        "level" : level,
        "ac" : ac,
        "hp" : hp,
        "charclass" : charClass
    }

    //SENDING OBJECTS TO ANOTHER JS FILE 
    const sheetToJson = JSON.stringify(newSheet) //transformed my object into a json string
    localStorage.setItem("charSheet",sheetToJson)//sent my object with his "id" charSheet to the localStorage
    //so i can access it now on my other js file.

    alert(`The sheet of the character ${name} was created. Redirecting to the sheet page.`)
    window.location.href="pages/sheet.html"//if you click the button you i'll be redirected to another page sheet.html
})
