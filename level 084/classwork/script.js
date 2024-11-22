const products = [
    {
        name: "Gaming Laptop",
        description: "A high-performance laptop perfect for gaming and work.",
        imageUrl: "https://www.bing.com/images/search?view=detailV2&ccid=XfQ1kPou&id=C1734E652BDD8708E16F1FD6A3408756BE626963&thid=OIP.XfQ1kPouOoE-nWrpqfsDAwHaFj&mediaurl=https%3a%2f%2fwww.domstechblog.com%2fwp-content%2fuploads%2f2015%2f12%2fmsi-gaming-laptop.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5df43590fa2e3a813e9d6ae9a9fb0303%3frik%3dY2livlaHQKPWHw%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1600&q=gaming+laptop&simid=608012884369494864&FORM=IRPRST&ck=F4874DFCA7D961EFF1A1FAF001C83027&selectedIndex=6&itb=0",
    },
    {
        name: "Desktop PC",
        description: "Powerful desktop for everyday use, from work to entertainment.",
        imageUrl: "https://www.bing.com/images/search?view=detailV2&ccid=o%2f23pifD&id=E6D68E5A56393F2AB4C965ADF361EC156FB5059B&thid=OIP.o_23pifDkX7hTNH6hnW4HAHaE3&mediaurl=https%3a%2f%2fimages-eu.ssl-images-amazon.com%2fimages%2fG%2f02%2fuk-electronics%2fproduct_content%2fHP%2fCompaqQ42011%2fGet-the-complete-package._V163679618_.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a3fdb7a627c3917ee14cd1fa8675b81c%3frik%3dmwW1bxXsYfOtZQ%26pid%3dImgRaw%26r%3d0&exph=2648&expw=4024&q=desktop+pc&simid=608039070762739838&FORM=IRPRST&ck=0A0593D885DCCE30AE9CE76E2D155FD2&selectedIndex=0&itb=0",
    },
    {
        name: "Ultrabook",
        description: "Sleek, ultra-portable laptop with long battery life.",
        imageUrl: "https://www.bing.com/images/search?view=detailV2&ccid=BjNsYTXc&id=661D7686BCA97B3CF79DC154238758B369FCA70E&thid=OIP.BjNsYTXc4rlQUqgF0pBUewHaEK&mediaurl=https%3a%2f%2fcdn.mos.cms.futurecdn.net%2f46AkJQeyNiw4hahATrfdr9.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.06336c6135dce2b95052a805d290547b%3frik%3dDqf8abNYhyNUwQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1919&q=ultrabook&simid=608011424080472203&FORM=IRPRST&ck=B172651A1FAFFF5E103088DA8131015A&selectedIndex=3&itb=0",
    }
    ];

function generateProductCards() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${product.imageUrl}" alt="${product.name}">
    <div class="card-body">
    <h3 class="card-title">${product.name}</h3>
    <p class="card-description">${product.description}</p>
    <button class="btn" onclick="buyNow('${product.name}')">Buy Now</button>
    </div>`;
    container.appendChild(card);
    });}

    function buyNow(productName) {
      alert(`You have selected to buy the ${productName}`);
    }

window.onload = generateProductCards;