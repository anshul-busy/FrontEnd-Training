

//FETCH URL
// const URL = ;


//callback


// ASYNC AWAIT
async function fetchData(){
   try {
     const response = await fetch("https://jsonplaceholder.typicode.com/users") 
    if(!response.ok){
        throw new Error("Invalid URL")
    }
    const data = await response.json()
    console.log(data[0].name)
    const container = document.getElementById("data-container")
    container.innerHTML=""

    data.forEach(item => {

        const element = document.createElement('div')
        element.innerHTML = `<h3>${item.name}</h3><p>@${item.username}</p>`;
        container.appendChild(element)

    });
   } catch (error) {
    console.log(error)
   }
}

fetchData()
