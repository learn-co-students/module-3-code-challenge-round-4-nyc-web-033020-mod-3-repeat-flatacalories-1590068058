const url = "http://localhost:3000/characters"
const dropdown = document.getElementById("character-names")
const characterDiv = document.querySelector("#detailed-info")
const form = document.getElementById("calories-form")
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    handleClick()
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
       name.setAttribute("dataset-id", `${character.id}`)
       dropdown.appendChild(name)
       id = `${character.id}`
    
    })
}

const handleDropdown = () => {
    document.addEventListener("change", e => {
        const id = e.target.dataset.id
        fetch(`http://localhost:3000/characters/${id}`)
        .then(res=> res.json())
        .then(renderCharacter)
    })
}

const renderCharacter = (character) => {
    const name = document.getElementById("name")
    const image = document.getElementById("image")
    const calories = document.getElementById("calories")
    characterDiv.setAttribute("dataset-id", `${character.id}`)
    id = `${character.id}`
    // const formvalue = document.createElement("input")
    // formvalue.setAttribute("value", `${character.id}`)
    // form.appendChild(formvalue)
    name.innerText = `${character.name}`
    image.src = `${character.image}`
    calories.innerText = `${character.calories}`
    console.log(characterDiv)
}


const handleClick = (id) => {
    document.addEventListener("submit", e =>{
        e.preventDefault()
       
        console.log(e.target)
        const formtwo = form.children[1]
        
        console.log("hi")
    })
} 
