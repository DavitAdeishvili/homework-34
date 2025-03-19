document.querySelector('p').style.transition = '0.2s linear';
document.querySelector('p').style.opacity = 0;

const fetchJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
        const data = await res.json();

        document.querySelector('p').innerHTML = data.setup;
        setTimeout(() => {
            document.querySelector('span').innerHTML = data.message;
        }, 3000);
    } catch (error) {
        console.error("Error fetching the joke:", error);
    }
};
fetchJoke();
document.querySelector('button').addEventListener('click', fetchJoke);