const count = document.querySelector('.count');
const reset = document.querySelector('.reset');
const totalNumClicks = document.querySelector('.number');

let num = 0;

reset.addEventListener("click", () => {
    num = 0;
    totalNumClicks.innerHTML = num;
});

window.onload = totalNumClicks.innerHTML = num;
count.addEventListener('click', () => {
    setTimeout(() => {
        totalNumClicks.innerHTML = (num += 1);
    }, 500);
});