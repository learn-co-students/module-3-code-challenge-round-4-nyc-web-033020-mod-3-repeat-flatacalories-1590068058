//√get all names and make it as drowdown menu value
// √add el change to select a value and show info to //#detailed-info div.
//add el add calories btn and can + the calories to caharacter default 0 patch the new character data to database 


//reset calores to make it to 0 and update the calories value to sever 
// change the character name maybe a edit btn 
// add a new character 

document.addEventListener('DOMContentLoaded',e=>{
  const base = 'http://localhost:3000/characters'
  const select = document.querySelector('#character-names')
  const infoDiv = document.querySelector('#detailed-info')
  const img = document.querySelector('#image')
  const p = document.querySelector('#name')
  const span= document.querySelector('#calories')
  
  const getCharacters = () => {
    fetch(base)
    .then(r => r.json())
    .then(characters => characters.forEach(character=>{
    renderDropdown(character)
    }))
  }

  const getAChar = (id) => {
    return fetch(`${base}/${id}`)
    .then(r=> r.json())
  }

  const renderDropdown = character =>{
      const option = document.createElement('option')
      option.textContent = character.name
      option.value = character.id
      // option.id = character.id
      select.append(option)
      select.addEventListener('change', e =>{
        const id = e.target.value 
        getAChar(id)
        .then(char =>{
          p.textContent = char.name
          img.src = char.image
          span.textContent = char.calories
        })   
      })
  }

  getCharacters()

})