const text = "Homebuying is broken. We aim to fix that.";
const speed = 150; // Speed in milliseconds
let index = 0;


const toggleMenu = () => {
    const menu = document.getElementById("navigation");
    menu.classList.toggle("show");
}

const typeWriter = () => {
    const myDiv = document.getElementById("typewriter");
    myDiv.classList.add('typing');

    if (index < text.length) {
        myDiv.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        myDiv.classList.remove('typing');
    }
}

//typeWriter();
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter();
    }, 1000);
});

document.getElementById('btn-menu').addEventListener('click', toggleMenu);
