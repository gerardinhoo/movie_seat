// Select elements in the DOM
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;

// Update total and count 
function updateSelectCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected")
  console.log(selectedSeats)
}



// Add event listener
container.addEventListener("click", (e) => {
  if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
   e.target.classList.toggle("selected")
  }
  updateSelectCount()
})