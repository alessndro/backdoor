// javascript
const publishBtn = document.getElementById("publish-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")
const userResponse = document.getElementById("user-response")

const responses = ["YesSSsSs", "fuckYE", "IhuuuUu", "goDaddy", "YESpapi","SiCabron"]

// Add input value to DB
publishBtn.addEventListener("click", function()
{

    let randomNumber = Math.floor(Math.random() * 5)
    userResponse.textContent = responses[randomNumber]
    listEl.innerHTML += `, ${responses[randomNumber]}`
    clearInputfield()
})


function clearInputfield()
{
    inputEl.value = ""
}
