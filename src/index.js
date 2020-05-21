const url = "http://localhost:3000/characters"
const dropdown = document.getElementById("character-names")
const characterDiv = document.querySelector("#detailed-info")
const form = document.getElementById("calories-form")
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    // handleClick()
})

const getCharacters = () => {
    fetch(url)
    .then(res => res.json())
    .then(renderCharacters)
}

const renderCharacters = (characters) => {
    characters.forEach(character => {
       const name = document.createElement("option")
       name.innerText = `${character.name}`
       name.setAttribute("dataset-id", `${character.id}`)
       dropdown.appendChild(name)
       id = `${character.id}`
       handleDropdown(id)
    })
}

const handleDropdown = (id) => {
    document.addEventListener("change", e => {
        fetch(`http://localhost:3000/characters/${id}`)
        .then(res=> res.json())
        .then(renderCharacter)
    })
}

const renderCharacter = (character) => {
    const name = document.getElementById("name")
    const image = document.getElementById("image")
    const calories = document.getElementById("calories")
    const formvalue = document.createElement("input")
    name.innerText = `${character.name}`
    image.src = `${character.image}`
    calories.innerText = `${character.calories}`
}


  
