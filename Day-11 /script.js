// const URL = "https://jsonplaceholder.typicode.com/users";


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
// fetchData();

// const searchInput = document.getElementById("search-feild");
// const container = document.getElementById("emp-table");

// searchInput.addEventListener("input", () => {
//   const filterValue = searchInput.value.toLowerCase();
//   console.log(container)
  
//   const items = container.querySelectorAll("div");
// console.log(items)
//   items.forEach(item => {
//     const text = item.textContent.toLowerCase();
    
//     if (text.includes(filterValue)) {
//       item.style.display = ""; 
//     } else {
//       item.style.display = "none"; 
//     }
//   });
// });

// --- SEARCH FUNCTIONALITY ---
document.getElementById('btn').addEventListener('click', function() {
    const searchId = document.getElementById('search-id').value.toLowerCase().trim();
    const searchName = document.getElementById('search-name').value.toLowerCase().trim();
    const searchEmail = document.getElementById('search-email').value.toLowerCase().trim();
    const searchPhone = document.getElementById('search-phone').value.toLowerCase().trim(); 

    const rows = document.querySelectorAll('.emp-data1');

    rows.forEach(row => {
        const idText = row.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
        const nameText = row.querySelector('.info p:nth-of-type(1)').textContent.toLowerCase();
        const emailText = row.querySelector('.info p:nth-of-type(2)').textContent.toLowerCase();
        
        // Correctly pulls the phone number text node from the end of the markup list
        const phoneText = row.querySelector('p:last-of-type').textContent.toLowerCase(); 

        const matchesId = idText.includes(searchId);
        const matchesName = nameText.includes(searchName);
        const matchesEmail = emailText.includes(searchEmail);
        const matchesPhone = phoneText.includes(searchPhone); 

        if (matchesId && matchesName && matchesEmail && matchesPhone) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });
});

// --- CLEAR FUNCTIONALITY (RECTIFIED) ---
document.getElementById('clear-btn').addEventListener('click', function() {
    // Corrected to reference 'search-phone' instead of the old 'search-dept' id
    document.getElementById('search-id').value = '';
    document.getElementById('search-name').value = '';
    document.getElementById('search-email').value = '';
    document.getElementById('search-phone').value = ''; 

    // Make all table records visible on screen again
    const rows = document.querySelectorAll('.emp-data1');
    rows.forEach(row => {
        row.style.display = '';
    });
});



// Grab the master checkbox and all individual row checkboxes
  const selectAllBox = document.getElementById('select-all');
  const rowCheckboxes = document.querySelectorAll('.row-checkbox');

  // 1. When master checkbox changes, toggle all row checkboxes
  selectAllBox.addEventListener('change', function() {
    rowCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllBox.checked;
    });
  });

  // 2. Optional: If a user unchecks a row manually, uncheck the master box
  rowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      // If any checkbox is unchecked, master box shouldn't say "Select All"
      if (!this.checked) {
        selectAllBox.checked = false;
      }
      
      // If ALL checkboxes get checked manually, check the master box automatically
      const allChecked = Array.from(rowCheckboxes).every(item => item.checked);
      if (allChecked) {
        selectAllBox.checked = true;
      }
    });
  });