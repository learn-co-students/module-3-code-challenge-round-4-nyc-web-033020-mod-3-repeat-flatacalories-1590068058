const url = "http://localhost:3000/characters"
const dropdown = document.getElementById("character-names")
const characterDiv = document.querySelector("#detailed-info")
console.log(characterDiv)
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    handleDropdown()
    handleClick()
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
       name.value = `${character.id}`
    //    name.dataset.id = `${character.id}`
       dropdown.appendChild(name)
    })
}

const handleDropdown = () => {
    document.addEventListener("change", e => {
        id = e.target.value
        fetch(`http://localhost:3000/characters/${id}`)
        .then(res=> res.json())
        .then(renderCharacter)

    })
}

const renderCharacter = (character) => {
    const name = document.getElementById("name")
    const image = document.getElementById("image")
    const calories = document.getElementById("calories")
    name.innerText = `${character.name}`
    image.src = `${character.image}`
    calories.innerText = `${character.calories}`
}

const handleClick = () => {
    document.addEventListener("submit", e => {
        e.preventDefault()
        console.log("hi")
    })
}
