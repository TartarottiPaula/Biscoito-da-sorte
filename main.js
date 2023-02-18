const cookie = document.querySelector(".cookie")
const openedCookie = document.querySelector(".openedCookie")

// Função Callback
function handleTryClick(event){
    event.preventDefault()

    const Luck = document.querySelector("#Luck")

    cookie.classList.add("hide")
    openedCookie.classList.remove("hide")

}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', function() {
    cookie.classList.remove("hide")
    openedCookie.classList.add("hide")
})