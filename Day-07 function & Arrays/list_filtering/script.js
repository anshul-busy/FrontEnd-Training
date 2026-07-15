// const searchInput = document.getElementById("search");
// const listItems = document.querySelectorAll("#list li");

// searchInput.addEventListener("input", () => {
//     const filterValue = searchInput.value.toLowerCase();
    
//     listItems.forEach(item => {
//         const text = item.textContent.toLowerCase();
        
//         if (text.includes(filterValue)) {
//             item.style.display = ""; 
//         } else {
//             item.style.display = "none";
//         }
//     });
// });




const searchInput1 = document.getElementById("search")
const list = document.querySelectorAll("#list li")

searchInput1.addEventListener("input" , ()=>{
    const filterValue = searchInput1.value.toLowerCase()

    list.forEach(item => {
       const text = item.textContent.toLowerCase()
       if(text.includes(filterValue)){
        item.style.display = "";
       }else{
        item.style.display = "none"
       }
    })


})