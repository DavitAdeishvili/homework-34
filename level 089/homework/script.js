const cards = [
    { title: "კარტი 1", number: 25, rating: 4.5, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F441141726003947590%2F&psig=AOvVaw325cfIOY_Wqkqr89GG76hz&ust=1733330707196000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjf06nliooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 2", number: 35, rating: 3.8, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjp.pinterest.com%2Fpin%2F579697783308926176%2F&psig=AOvVaw2SJzI4ky67QGEJdafd3UyG&ust=1733330721227000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiW0qfliooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 3", number: 28, rating: 5.0, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F929430441839076967%2F&psig=AOvVaw3_Vx2jf4OaOo_qUpSDn9Kh&ust=1733330545951000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDnwNXkiooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 4", number: 22, rating: 4.2, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F752523418982845034%2F&psig=AOvVaw3eJ0Os3GhW33NGf_K3d8jZ&ust=1733330574134000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjcgOLkiooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 5", number: 30, rating: 4.0, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjp.pinterest.com%2Fpin%2F579697783308926174%2F&psig=AOvVaw3pGo1EEStS0X0TbwNRQRib&ust=1733330752903000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjM3LbliooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 6", number: 18, rating: 4.3, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngpacks.com%2Fproduct%2Fblue-uno-reverse-card-png&psig=AOvVaw33v-2aZ5nssmrJjCMFlU42&ust=1733330795703000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiAlMzliooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 7", number: 40, rating: 3.5, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fmayhamamanda06%2Funo-cards%2F&psig=AOvVaw3zIBCfT-8eo5UY8AxtMmpe&ust=1733330810611000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiW89fliooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 8", number: 30, rating: 4.7, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2Fspillekort--381469030953572729%2F&psig=AOvVaw2en2a8SnoEgtwmGEeOI6-h&ust=1733330845937000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPD5z-XliooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 9", number: 29, rating: 3.9, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiexto.com%2Fcardgames%2Funo-cards-rules-with-pictures-meanings%2F&psig=AOvVaw3Kj5QR_JuX3F359ZctFPvJ&ust=1733330861617000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjTsOrliooDFQAAAAAdAAAAABAE" },
    { title: "კარტი 10", number: 50, rating: 2.9, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funoregler.com%2Funo-rules%2Funo-no-mercy-rules%2F&psig=AOvVaw0rgajW4VxERQm8qWFVsQJ2&ust=1733330873074000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNjvtPDliooDFQAAAAAdAAAAABAE" },
];

const cardsContainer = document.querySelector('.cards-container');

function renderCards(filteredCards) {
    cardsContainer.innerHTML = '';
    filteredCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <div class="card-title">${card.title}</div>
            <div class="card-info">რიცხვი: ${card.number}</div>
            <div class="card-rating">რეიტინგი: ${card.rating}</div>
        `;
        cardsContainer.appendChild(cardElement);
    });
}

document.getElementById('ageFilter').addEventListener('change', (event) => {
    const filteredCards = event.target.checked ? cards.filter(card => card.number <= 30) : cards;
    renderCards(filteredCards);
});

document.getElementById('sortAsc').addEventListener('click', () => {
    const sortedCards = [...cards].sort((a, b) => a.rating - b.rating);
    renderCards(sortedCards);
});

document.getElementById('sortDesc').addEventListener('click', () => {
    const sortedCards = [...cards].sort((a, b) => b.rating - a.rating);
    renderCards(sortedCards);
});

document.getElementById('sortRandom').addEventListener('click', () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    renderCards(shuffledCards);
});

renderCards(cards);