let products = document.querySelector('.products');
const productData = [
    {
        imgsrc: "/assets/storeThumbnails/strawberrykiwi.png",
        price: 'Are you excited?',
        name: 'FIVE NIGHTS AT FREDDYS 2 will reportedly start shooting late 2024.',
        about: "Harmony of ripe strawberries and tangy kiwi, delivering a burst of natural flavors.",
        index: 0,
    },
    {
        imgsrc: "/assets/storeThumbnails/lemonmint.png",
        price: 2.49,
        name: 'Lemon Mint',
        about: "Zesty Citrus Fruits blend with a hint of Mint.",
        index: 1,
    },
    {
        imgsrc: "/assets/storeThumbnails/blueraspberry.png",
        price: 2.99,
        name: 'Blue Raspberry',
        about: "Blueberries and Raspberries, with a touch of Pomegranate.",
        index: 2,
    },
    {
        imgsrc: "/assets/storeThumbnails/cherrylime.png",
        price: 2.79,
        name: 'Cherry Lime',
        about: "Bold Cherries paired with the tang of lime for a dynamic flavor experience.",
        index: 3,
    },
    {
        imgsrc: "/assets/storeThumbnails/applecinnamon.png",
        price: 3.19,
        name: 'Apple Cinnamon',
        about: "Crisp Apple and Warm Cinnamon, evoking the feeling of a cozy Autumn.",
        index: 4,
    },
    {
        imgsrc: "/assets/storeThumbnails/coconutoasis.png",
        price: 3.19,
        name: 'Coconut Oasis',
        about: "Creamy coconut meets zesty lime for a refreshing tropical escape in every sip.",
        index: 5,
    },
    {
        imgsrc: "/assets/storeThumbnails/plumspeach.png",
        price: 2.79,
        name: 'Plums Peach',
        about: "Intense Plum flavor with a punch of Peach, delivering a burst of energy.",
        index: 6,
    },
];
var sortedData = productData.slice(0);
let cartData = [];

window.onload = function () {
    products.innerHTML = "";
    productData.forEach((article, key) => {
        const product_div = document.createElement("div");
        product_div.className = "product";
        product_div.classList.add("article");
        const articleContent = `
            <img>
            <h3></h3>
            <p class="price"></p>
            <p class="about"></p>
            <button class="addCart" onclick="addToCart(${key})">Add To Cart</button>
        `;
        product_div.innerHTML = articleContent;
        products.appendChild(product_div);
    });

    for (var i in productData) {
        // console.log(i);
        products.getElementsByTagName('h3')[i].innerHTML = productData[i].name;
        products.getElementsByClassName('price')[i].innerHTML = "$" + productData[i].price;
        products.getElementsByClassName('about')[i].innerHTML = productData[i].about;
        products.getElementsByTagName('img')[i].src = productData[i].imgsrc;
        products.getElementsByTagName('img')[i].alt = productData[i].name;
    }
}