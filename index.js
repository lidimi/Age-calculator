const date = new Date();
const today = date.getDate();
console.log(today);

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
});
