const productos = {
    whisky: [
        { nombre: "Whisky Old Parr", img: "imagenes/whisky.jpg" },
        { nombre: "Whisky Buchanan's", img: "https://images.unsplash.com/photo-1558640476-437aef67e999" }
    ],
    vinos: [
        { nombre: "Vino Tinto Reservado", img: "imagenes/aguardienteSinAzucar.png" },
        { nombre: "Vino Blanco Dulce", img: "imagenes/aguardiente.webp" },
        { nombre: "Vino Blanco Dulce", img: "imagenes/aguardiente.webp" }
    ],
    cervezas: [
        { nombre: "Cerveza Corona", img: "https://images.unsplash.com/photo-1580910051074-e0d7d32f5973" },
        { nombre: "Cerveza Heineken", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e" }
    ]
};

const categoriaSelect = document.getElementById("categoriaSelect");
const catalogoContainer = document.getElementById("catalogoContainer");

function cargarCatalogo() {
    const categoria = categoriaSelect.value;

    catalogoContainer.innerHTML = productos[categoria].map(p => `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.nombre}</h3>
        </div>
    `).join('');
}

categoriaSelect.addEventListener("change", cargarCatalogo);
cargarCatalogo();


// SLIDER AUTOMÁTICO + FLECHAS
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

// Siguiente
document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

// Anterior
document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// Automático cada 4 segundos
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);
