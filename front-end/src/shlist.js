fetch("/api/sheets",{
    method : "GET",
    headers : {
    "Content-type" : "application/json"
    }
}).then((response) => response.json()).then((response) => {
    const ourDiv = document.getElementById("container1")
    // ourDiv.innerHTML = (JSON.stringify(response[0]))
    for (let i = 0; i < 9; i++) {
        console.log(response[i].id)
        const centralDiv = document.createElement('div')
        const divPhoto = document.createElement('img')
        const infoText = document.createElement('span')

        divPhoto.style.borderRadius = "50%"

        centralDiv.addEventListener("click", () => {
            window.location.href=`${window.location.origin}/pages/sheet.html?id=`+response[i].id+`&save=true`
        })

        //defining the image by the class
        if (response[i].class == "warrior"){
            divPhoto.src="../assets/warrior.png"
            divPhoto.width="50"
            divPhoto.height="50"
        }
        else {
            divPhoto.src = "https://picsum.photos/50"
        }

        
        centralDiv.style.textTransform = "capitalize"
        centralDiv.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
        centralDiv.style.background
        centralDiv.style.padding = '10px'
        centralDiv.style.borderRadius = '5px'
        infoText.innerHTML = `
        <br>
        ${response[i].name}<br>
        ${response[i].species} | ${response[i].class}<br>
        HP : ${response[i].hp} | AC : ${response[i].armor}
        `
        centralDiv.appendChild(divPhoto)
        centralDiv.appendChild(infoText)
        ourDiv.appendChild(centralDiv)

    }







})

