async function getFetch(url){
    try {
        const response = await fetch((url), {
            method : "GET",
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return response.json()
    }
    catch(error){
        console.log('Fetch failed',error)
    }
}

async function deleteFetch(url) {
    try {
        const response = await fetch((url), {
            method : "DELETE",
            headers : {
                'Content-Type' : 'application/json'
            }
        })
    }
    catch(error){
        console.log('Fetch failed',error)
    }
}

const parameters = new URLSearchParams(window.location.search)
const paramsID = parameters.get('id')

const deleteButton = document.getElementById('deleteButton')
const deleteButton2 = document.getElementById('deleteButton2')
const charInfo = document.getElementsByClassName('charInfo')
const inputId = document.getElementById('charID')


deleteButton.onclick = async () => {
    charId = inputId.value
    const charValues = await getFetch(`http://localhost:3000/api/sheets/${charId}`)

    charInfo[0].innerHTML =  `
    <br>
    Are you sure you wanna delete this character?<br>
    <br>
    Name: ${charValues[0].name} | Class: ${charValues[0].class}<br>
    Specie: ${charValues[0].species} | Level: ${charValues[0].level}
    `
    deleteButton.classList.add('hidden')
    deleteButton2.classList.remove('hidden')
    
    console.log(charValues[0])
    
    deleteButton2.onclick = async () => {
        deleteFetch(`http://localhost:3000/api/sheets/${charValues[0].statsid}`)
        alert('Character deleted. Refreshing the page.')
        window.location.reload()
    }
}
if (paramsID!=null){
    inputId.value = paramsID
    deleteButton.click()
}