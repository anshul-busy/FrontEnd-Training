

const URL = "https://jsonplaceholder.typicode.com/users";
const searchInput = document.getElementById("search");
const container = document.getElementById("list");

async function fetchData() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Invalid URL");
    }
    const data = await response.json();
    // console.log(data);
    const container = document.getElementById("list");
    container.innerHTML = "";
    data.forEach((item) => {
              
      const element = document.createElement("div");
      element.innerHTML = `<h3>${item.name}</h3> <p>@:-${item.username}</p> <p>Em:-${item.email}</p> <p>Ph:-${item.phone}</p>`;
      container.appendChild(element);
    });
  } catch (error) {
    console.log("error :- ", error);
  }
}
fetchData();

searchInput.addEventListener("input", () => {
  const filterValue = searchInput.value.toLowerCase();
  
  const items = container.querySelectorAll("div");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    
    if (text.includes(filterValue)) {
      item.style.display = ""; 
    } else {
      item.style.display = "none"; 
    }
  });
});