const jokeEl = document.querySelector('#joke');
const get_joke = document.querySelector('.get_joke');

window.addEventListener('DOMContentLoaded', getJoke);

get_joke.addEventListener('click', getJoke);

async function getJoke() {

    // call the icanhaz API

    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await jokeRes.json();

    console.log(joke);
    jokeEl.textContent = joke.joke;
}