const slapButton = document.querySelector(".slap-button");
const kickButton = document.querySelector(".kick-button");
const punchButton = document.querySelector(".punch-button");

slapButton.addEventListener('click', () => {
    console.log('Slap Clicked')
});

kickButton.addEventListener('click', () => {
    console.log('Kick Clicked')
});

punchButton.addEventListener('click', () => {
    console.log('Punch Kicked')
});