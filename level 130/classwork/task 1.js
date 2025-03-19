document.querySelector('button').addEventListener('click', async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        document.querySelector('img').src = data.message
    } catch (error) {
        console.error(error)
    }
})