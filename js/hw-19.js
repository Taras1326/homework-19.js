
// 1. Завдання 
const radioButtons = document.querySelectorAll('input[name="color"]');
radioButtons.forEach(radio => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});
document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;





// 2. Завдання 
            // 1
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const value = nameInput.value.trim();
  nameOutput.textContent = value === "" ? "Nazar" : value;
  

  if (!nameOutput.classList.contains("visible")) {
    nameOutput.classList.add("visible");
  }
});


            // 2
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = Number(validationInput.dataset.length);
  const actualLength = validationInput.value.trim().length;

  validationInput.classList.remove("valid", "invalid");

  if (actualLength === expectedLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});






// 3. Завдання 
const rangeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

textSpan.style.fontSize = `${rangeInput.value}px`;

rangeInput.addEventListener("input", () => {
  textSpan.style.fontSize = `${rangeInput.value}px`;
});

