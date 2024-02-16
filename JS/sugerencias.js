// API para hacer solicitud
let url = "https://api-colombia.com/api/v1/TouristicAttraction";

let visibleCards = 3; // Número inicial de cards visibles
const cardsPerLoad = 6; // Número de cards a cargar al hacer clic en "Ver más"


function getTouristicPlaces() {
    const results = fetch(url);
    results
        .then(response => response.json())
        .then(data => {
            viewPlaces(data);
            showHideCards();
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
}

const viewPlaces = (data) => {
    console.log(data);

    data.forEach(lugar => {
        const article = document.createRange().createContextualFragment(
            /*html*/`
            <article>
                <div class="image-container">
                    <img src="${lugar.images}" alt="Imagen no disponible" onerror="this.onerror=null;this.src='../src/Caminata.jpg';">
                </div>
                <h2>${lugar.name}</h2>
                <h4>Ciudad: <span>${lugar.city.name}</span></h4>
                <div class="description-container">
                    <p class="short-description">${lugar.description.substring(0, 200)}...</p>
                    <p class="full-description" style="display:none;">${lugar.description}</p>
                </div>
                <button class="ver-mas-btn btn-color" onclick="expandirDescripcion(this)">Ver más</button>
            </article>
            `);

        const cards = document.querySelector(".cards-places");
        cards.append(article);
    });
}


const showHideCards = () => {
    const articles = document.querySelectorAll(".cards-places article");
    articles.forEach((article, index) => {
        if (index < visibleCards) {
            article.style.display = 'flex';
        } else {
            article.style.display = 'none';
        }
    });

    updateVerMasBtnVisibility(articles);
}

const updateVerMasBtnVisibility = (articles) => {
    if (visibleCards >= articles.length) {
        // Ocultar botón si no hay más cards por mostrar
        verMasBtn.style.display = 'none';
    } else {
        verMasBtn.style.display = 'block';
    }
};

const verMasBtn = document.getElementById('verMasBtn');
verMasBtn.addEventListener('click', () => {
    visibleCards += cardsPerLoad;
    showHideCards();
});

getTouristicPlaces();

function expandirDescripcion(button) {
    const article = button.parentElement;
    const shortDesc = article.querySelector('.short-description');
    const fullDesc = article.querySelector('.full-description');

    shortDesc.style.display = 'none';
    fullDesc.style.display = 'block';
    button.style.display = 'none';

    // Ajustar la altura máxima dinámicamente
    article.style.maxHeight = 'none';
}