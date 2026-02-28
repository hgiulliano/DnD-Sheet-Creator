var parameters = new URLSearchParams(window.location.search)//catch the url params values "a kind of slice"
let currentPage = Number(parameters.get("page") ?? 1)
let limit = parameters.get("limit") ?? 9 // ?? defines an default value

async function fetchData(page, limit) {
    try {
        const responseNoJson = await fetch(`/api/sheets?page=${page}&limit=${limit}`, {//? and & to send things to the back end 
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const response = await responseNoJson.json()
        displaySheets(response)
    }
    catch (error) {
        console.error("Fetch failed", error);
    }
}

function displaySheets(response) {

    const ourDiv = document.getElementById("container1")
    const nextButton = document.getElementsByClassName("next")
    const prevButton = document.getElementsByClassName("previous")
    const pagesCounter = document.createElement('span')

    pagesCounter.classList.add('counter')
    pagesCounter.innerHTML = `${currentPage}/${response.totalPages}`

    const classImage = {
        warrior: "../assets/warrior.png",        
        warlock: "../assets/warlock.jpg",        
        rogue:  "../assets/rogue.png",        
        sorcerer: "../assets/sorcerer.png",
        druid: "../assets/druid.png",        
        wizard: "../assets/wizard.png"
    }

    nextButton[0].onclick = () => {
        currentPage += 1
        ourDiv.innerHTML = ''
        if (currentPage > 1)
            prevButton[0].classList.remove("hidden")
        if (currentPage == response.totalPages) {
            nextButton[0].classList.add("hidden")
        }
        window.history.pushState({},"",`http://localhost:3000/pages/shlist.html?page=${currentPage}&limit=${limit}`)
        fetchData(currentPage, limit) //we use fetch again to query the next page 

    }
    prevButton[0].onclick = () => {
        currentPage -= 1
        ourDiv.innerHTML = ''
        if (currentPage == 1)
            prevButton[0].classList.add("hidden")
        if (currentPage == (response.totalPages - 1)) {
            nextButton[0].classList.remove("hidden")
        }
        window.history.pushState({},"",`http://localhost:3000/pages/shlist.html?page=${currentPage}&limit=${limit}`)
        fetchData(currentPage, limit) // we use fetch 
    }

    for (let i = 0; i < response.items.length; i++) {
        console.log(response.items[i].id)
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
        
        divPhoto.src = classImage[response.items[i].class]

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

fetchData(currentPage, limit)
