

async function makeActive() {
    const currents = document.querySelectorAll('header .btn');

    for (const current of currents) {
        const backgroundColor = "blue";
        current.style.backgroundColor;
        this.className += backgroundColor;
    }
}
// current.addEventListener('click', function () {


// current.className = current.className.replace(" active", "");
// this.className += " active";




const btns = document.querySelectorAll('header .btn');

for (const btn of btns) {
    btn.addEventListener("click", async function () {
        await makeActive();
    });
}


