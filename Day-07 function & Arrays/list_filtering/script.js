
const arr = ["Alice", "Bob", "Charlie", "David"];

const heading = document.getElementById("heading")
arr.forEach(user => {
    const h1 = document.createElement("h1")
    h1.textContent =user
    heading.appendChild(h1)
})


// const inp = document.getElementById("filterInput")
// const element = names.filter(users =>  users[users])




