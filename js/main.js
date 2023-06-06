const warpper = document.querySelector(".warppe");
let selectBtn = warpper.querySelector(".select-btn");
let options = warpper.querySelector(".options");
let searchInput = document.querySelector("input");
// Array of some countarys
let countries = [
  "Iraq",
  "Deutschland",
  "Autralien",
  "Indein",
  "USA",
  "UAE",
  "Denmark",
  "Schweiz",
  "Cuba",
  "Singapur",
  "Franc",
  "Östreisch",
  "England",
  "Iran",
  "Lebanon",
  "Algeiren",
  "Syerin",
  "Türkei",
  "Russia",
  "Südafrika",
  "Nepal",
  "Spain",
  "Mexico",
  "Barzil",
  "Palasiena",
  "Sri Lanka",
  "Uksine",
  "Japan",
  "Italy",
  "Finland",
];
function addCountary() {
  countries.forEach((count) => {
    // adding each countary insaid li and inserting all li inseid
    const li = renderCountry(count);
    options.append(li);
  });
}

addCountary();
function updatesOne() {
  let span = document.querySelector(".select-btn");
  span.firstElementChild.innerText = this.innerText;
  warpper.classList.remove("active");
}

searchInput.addEventListener("keyup", (e) => {
  let arr = []; // Gerating empty Array
  let serachArr = searchInput.value.toLowerCase();
  // returing all conuties from array which are start with user searched value
  options.innerHTML = "";
  arr = countries
    .filter((item) => {
      return item.toLowerCase().startsWith(serachArr);
    })
    .forEach((count) => {
      // adding each countary insaid li and inserting all li inseid
      const li = renderCountry(count);
      options.append(li);
    });

  if (options.innerHTML === "") {
    options.innerHTML = `<h1>No Result Found</h1>`;
  }
});

function renderCountry(count) {
  let li = document.createElement("li");
  li.innerHTML = count;
  li.addEventListener("click", updatesOne);
  return li;
}

selectBtn.addEventListener("click", () => {
  warpper.classList.toggle("active");
});
