
// const oneBtn = document.querySelector("#one")
// // console.log(oneBtn);

// const twoBtn = document.querySelector("#two")
// // console.log(twoBtn);

// const threeBtn = document.querySelector("#three")
// // console.log(threeBtn);


// twoBtn.addEventListener("click", () => {
//     console.log("Повісив слухача на кнопку twoBtn");

//     oneBtn.addEventListener("click", () => {
//         console.log("Клік по цільовій кнопці");
//     })
// })




// threeBtn.addEventListener("click", () => {
//     oneBtn.removeEventListener("click", () => {
//         console.log("Знімаю слухача подій");
//     })
// })


// function onClsckBtn() {
//     console.log("Клік по цільовій кнопці");
// }


// const btnClick = document.querySelector(".btn")
// console.log(btnClick);


// btnClick.addEventListener("click", () => {
//     oneBtn.style.backgroundColor = "red";

//     twoBtn.style.backgroundColor = "yelow";

//     threeBtn.style.backgroundColor = "green";
// })



// const formRef = document.querySelector(".form")
// // console.log(formRef);




// formRef.addEventListener("submit", (event) => {
//     event.preventDefault()
//     console.log(event.target);
//     console.log(event.currentTarget);

//     // const inpEmail = document.querySelector("#mail")
//     // console.log(inpEmail.value);

//     // const inpPass = document.querySelector("#password")
//     // console.log(inpPass);


//     const formData = new FormData(event.currentTarget);
//     formData.forEach((a, b) => {
//         console.log(`AAA: ${a}`);
//         console.log(`BBB: ${b}`);
//     })
//     // console.log(formData);


//     // console.log(event);
// })




// Напишіть скрипт зміни кольору кнопки при натискані на неї.

// const btnButton = document.querySelector(".button")
// console.log(btnButton);
// btnButton.addEventListener("click", () => {
//     btnButton.style.backgroundColor = "red"
//     btnButton.textContent = "green"
//     document.body.style.backgroundColor = "aqua"
// })






// const userName = document.querySelector(".inputName");
// const checkBox = document.querySelector(".checkbox");
// const btn = document.querySelector(".btn");
// const textBtn = document.querySelector("btnText");

// userName.addEventListener("input", (event) => {
//     // console.log("Подія на інпуті");
//     // console.log(event.currentTarget.value);
//     textBtn.textContent = event.currentTarget.value
    
// })

// checkBox.addEventListener("change", (event) => {
//     // console.log(event.currentTarget.checkBox);
//     if (event.currentTarget.checked) {
//         // btn.removeAttribute
//         btn.disabled = false;
//     } else {
//         btn.disabled = true;
//     }
// })


// Focus - подія focus коли ми знаходимось у події нашого інпута
// Change - подія сhange, вішається на checkbox та радіо-баттом
// Blur - подія блюр, при втраті фокус з інпута
// input -  подія інпута, постійно відслідковує кожну зміну значень







// const btn = document.querySelector(".btn");
// // console.log(btn);


// btn.addEventListener("click", () => {
//     const r = Math.random(Math.random() * (255 - 1) + 1);

//     const g = Math.random(Math.random() * (255 - 1) + 1);

//     const b = Math.random(Math.random() * (255 - 1) + 1);

//     document.body.style.backgroundColor = rgb(`${r}, ${g}, ${b}`)
// })




const inputEl = document.getElementById("font-size-control");
console.log(inputEl);

const textEl = document.querySelector(".desc");

inputEl.addEventListener("input", () => {
    const size = inputEl.value + "px";
    // console.log(inputEl.value);
    textEl.style.fontSize = size;
});

