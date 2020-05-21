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
       name.setAttribute("id", `${character.id}`)
       dropdown.appendChild(name)
       name.value = `${character.id}`
    
    })
}

const handleDropdown = () => {
    document.addEventListener("change", e => {
        
        fetch(`http://localhost:3000/characters/${e.target.value}`)
        .then(res=> res.json())
        .then(renderCharacter)
    })
}

const renderCharacter = (character) => {
    const name = document.getElementById("name")
    const image = document.getElementById("image")
    const calories = document.getElementById("calories")
    characterDiv.setAttribute("value", `${character.id}`)
    // id = `${character.id}`
    // const formvalue = document.createElement("input")
    // formvalue.setAttribute("value", `${character.id}`)
    // form.appendChild(formvalue)
    name.innerText = `${character.name}`
    image.src = `${character.image}`
    calories.innerText = `${character.calories}`
    // console.log(characterDiv)
}


const handleClick = () => {
    document.addEventListener("submit", e =>{
        e.preventDefault()


        id = e.target.parentElement 
        console.log(id.value)
        
       
    })
} 
