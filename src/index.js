const url = "http://localhost:3000/characters"
const dropdown = document.getElementById("character-names")
console.log(dropdown)
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    handleDropdown()
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
       name.value = `${character.name}`
       name.dataset.id = `${character.id}`
       dropdown.appendChild(name)
    })
}

const handleDropdown = () => {
    document.addEventListener("change", e => {
        id = e.target.dataset.id

    })
}