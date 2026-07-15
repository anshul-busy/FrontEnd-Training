//FETCH URL

const URL = "https://jsonplaceholder.typicode.com/users";


//Callback
function fetchData1(url){
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("invalid URL")
        }
        const data= response.json()
        return data
    })
    .then(data=>useCallback(null,data))
    .catchO(error => console.log(error))
}
function dataCallback(error,data){
    if(error){
        console.log(error)
        return
    }else{
        console.log(data)
    }
}
fetchData1(URL, dataCallback)


// ASYNC AWAIT
async function fetchData(){
   try {
     const response = await fetch(URL) 
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


