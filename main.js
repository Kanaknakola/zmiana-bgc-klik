// Pierwsza metoda zadania
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

body.addEventListener('click', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    if (x % 2 == 0 && y % 2 == 0) {
        body.style.backgroundColor = "red";
        console.log(x, y)
    } else if (x % 2 != 0 && y % 2 != 0) {
        body.style.backgroundColor = "blue";
        console.log(x, y)
    } else {
        body.style.backgroundColor = "green";
        console.log(x, y)
    }
    h1.textContent = `${x}, ${y}`;
})

// Druga metoda zadania
// document.body.addEventListener('click', (e) => {
//     const color = getColor(e);
//     document.body.style.backgroundColor = color;
// })

// const getColor = (e) => {
//     if (e.clientX % 2 === 0) {
//         if (e.clientY % 2 === 0) {
//             return "red";
//         } else {
//             return "green";
//         }
//     } else {
//         if (e.clientY % 2 === 0) {
//             return "green";
//         } else {
//             return "blue";
//         }
//     }
// }