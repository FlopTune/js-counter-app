let count = 0;

const countHeader = document.getElementById("count")
const subBtn = document.getElementById("subtract")
const addBtn = document.getElementById("add");

countHeader.innerText = count;

addBtn.addEventListener("click", () => {
    count++;
    countHeader.innerText = count;
});

subBtn.addEventListener("click", () => {
    count--;
    countHeader.innerText = count;
})