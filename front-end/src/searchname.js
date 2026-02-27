// TODO: Refatorar os ifs das imagens por um objeto de mapeamento.

async function fetchData(charName,currentPage,limit) {
    try{
       const response = await fetch((`http://localhost:3000/api/sheets/search/${charName}?page=${currentPage}&limit=${limit}`), {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
       }) 
        const responsejson = await response.json()
        displaySheets(responsejson)
    }
    catch(error){
        console.log('Fetch failed : ',error)
    }
}

const params = new URLSearchParams(window.location.search)
const charName = params.get('name')
const limit = Number(params.get('limit')) || 9
var currentPage = Number(params.get('page')) || 1

window.onload = async () => {
    if(charName == null || charName == '' || charName == undefined){
        alert('Please insert a character name')
        window.location.href = `../index.html`
    }
    else{
        await fetchData(charName,currentPage,limit)
    }
}

function displaySheets(response) {
    const ourDiv = document.getElementById("container1")
    const nextButton = document.getElementsByClassName("next")
    const prevButton = document.getElementsByClassName("previous")
    const pagesCounter = document.createElement('span')

    pagesCounter.classList.add('counter')
    pagesCounter.innerHTML = `${currentPage}/${response.totalPages}`

    nextButton[0].onclick = () => {
        currentPage += 1
        ourDiv.innerHTML = ''
        if (currentPage > 1)
            prevButton[0].classList.remove("hidden")
        if (currentPage == response.totalPages) {
            nextButton[0].classList.add("hidden")
        }

        fetchData(charName,currentPage, limit) //we use fetch again to query the next page 

    }
    prevButton[0].onclick = () => {
        currentPage -= 1
        ourDiv.innerHTML = ''
        if (currentPage == 1)
            prevButton[0].classList.add("hidden")
        if (currentPage == (response.totalPages - 1)) {
            nextButton[0].classList.remove("hidden")
        }

        fetchData(charName,currentPage, limit) 
    }

    for (let i = 0; i < response.items.length; i++) {
        const centralDiv = document.createElement('div')
        const divPhoto = document.createElement('img')
        const infoText = document.createElement('span')
        
        centralDiv.classList.add('container1')
        divPhoto.classList.add('divPhoto')

        centralDiv.addEventListener("click", () => {
            centralDiv.classList.add("click-animation")
            setTimeout(() => {
                centralDiv.classList.remove("click-animation")
            }, 20)
            window.location.href = `${window.location.origin}/pages/sheet.html?id=${response.items[i].id}&save=true`
        })

        //defining the image by the class
        if (response.items[i].class == "warrior") {
            divPhoto.src = "../assets/warrior.png"
        }
        else if (response.items[i].class == "warlock") {
            divPhoto.src = "../assets/warlock.jpg"
        }
        else if (response.items[i].class == "rogue") {
            divPhoto.src = "../assets/rogue.png"
        }
        else if (response.items[i].class == "sorcerer") {
            divPhoto.src = "../assets/sorcerer.png"
        }
        else if (response.items[i].class == "druid") {
            divPhoto.src = "../assets/druid.png"
        }
        else if (response.items[i].class == "wizard") {
            divPhoto.src = "../assets/wizard.png"
        }
        else {
            alert("The character class is undefined")
        }
    
        infoText.innerHTML = `
        <br>
        ${response.items[i].name}<br>
        ${response.items[i].species} | ${response.items[i].class}<br>
        HP : ${response.items[i].hp} | AC : ${response.items[i].armor}
        `

        centralDiv.appendChild(divPhoto)
        centralDiv.appendChild(infoText)
        ourDiv.appendChild(centralDiv)
    }

    ourDiv.appendChild(pagesCounter)

}