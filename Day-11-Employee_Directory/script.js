// const URL = "https://jsonplaceholder.typicode.com/users";


// async function fetchData() {
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error("Invalid URL");
//     }
//     const data = await response.json();
//     // console.log(data);
//     const container = document.getElementById("list");
//     container.innerHTML = "";
//     data.forEach((item) => {
              
//       const element = document.createElement("div");
//       element.innerHTML = `<h3>${item.name}</h3> <p>@:-${item.username}</p> <p>Em:-${item.email}</p> <p>Ph:-${item.phone}</p>`;
//       container.appendChild(element);
//     });
//   } catch (error) {
//     console.log("error :- ", error);
//   }
// }


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

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('search-id').value = '';
    document.getElementById('search-name').value = '';
    document.getElementById('search-email').value = '';
    document.getElementById('search-phone').value = ''; 

    const rows = document.querySelectorAll('.emp-data1');
    rows.forEach(row => {
        row.style.display = '';
    });
});



  const selectAllBox = document.getElementById('select-all');
  const rowCheckboxes = document.querySelectorAll('.row-checkbox');

  selectAllBox.addEventListener('change', function() {
    rowCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllBox.checked;
    });
  });

  rowCheckboxes.forEach(checkbox =>
     {
    checkbox.addEventListener('change', function() {
      if (!this.checked) {
        selectAllBox.checked = false;
      }
      
      const allChecked = Array.from(rowCheckboxes).every(item => item.checked);
      if (allChecked) {
        selectAllBox.checked = true;
      }
    });
  });

  