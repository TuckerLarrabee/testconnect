const button = document.querySelector("#btn")

var toggleFunction = function () {
    button.classList.toggle("bg")
}

button.addEventListener("click", toggleFunction)



// var response = fetch("https://api.github.com/users/octocat/repos")
// console.log(response)

