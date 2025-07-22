let isListVisible = false;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loadFile").addEventListener("click", function () {
    const usersData = 'https://dummyjson.com/users';
    if (isListVisible) {
      hideList();
    } else {
      fetchData(usersData);
    }
    isListVisible = !isListVisible;
  });
});


async function fetchData(usersData) {
  const response = await fetch(usersData);
  const data = await response.json();
  displayProducts(data.users);
}

function displayProducts(users) {
  const mainContainer = document.getElementById("main");
  mainContainer.style.display = 'flex';
  mainContainer.innerHTML = '';

  users.forEach((user) => {
    let producto = document.createElement("div");
    producto.className = "col-md-4 mb-4";
    producto.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                    <p class="card-text">📧 ${user.email}</p>
                    <p class="card-text">👷 ${user.username}</p>
                    <p class="card-text">🔐 ${user.role}</p>
                </div>
            </div>`;
    mainContainer.appendChild(producto);
  });
}

function hideList() {
  document.getElementById("main").style.display = 'none';
}