
document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded");
});


function showMessage() {
  alert("Feature coming soon!");
}


fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("API not ready yet"));