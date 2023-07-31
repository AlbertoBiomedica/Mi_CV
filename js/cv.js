let indicadorCertificados = document.getElementById("indicadorCarousel");
let elementCarroucel = document.getElementById("elementCarousel");

let certificados = [
    { img: "./img/certificado_1.jpg", descripcion: "Mantenimiento de equipo médico" },
    { img: "./img/certificado_2.jpg", descripcion: "Mantenimiento preventivo a incubadoras neonatales" },
    { img: "./img/certificado_3.jpg", descripcion: "Ventilación mecanica" },
    { img: "./img/certificado_4.jpg", descripcion: "Mantenimiento a unidades odontologícas" },
    { img: "./img/certificado_5.jpg", descripcion: "Inducción a ingeniero de servicio biomédico" },
    { img: "./img/certificado_6.jpg", descripcion: "Mantenimiento a unidades odontologícas" },
    { img: "./img/certificado_7.png", descripcion: "Estrategía de compra de dispositivos médicos" },
    { img: "./img/certificado_8.jpg", descripcion: "Control de calidad en equipos de ventilación mecánica" },
    { img: "./img/certificado_9.jpg", descripcion: "Introducción a un área crítica neonatal" },
    { img: "./img/certificado_10.jpg", descripcion: "Electricidad residencial y comercial" },
    { img: "./img/certificado_11.jpg", descripcion: "Electricista" },
    { img: "./img/certificado_12.jpg", descripcion: "Técnico en electronica" },
    { img: "./img/certificado_13.jpg", descripcion: "Parametros y pruebas de seguridad eléctrica en equipo médico" },
    { img: "./img/certificado_14.jpg", descripcion: "Termoregulación y monitoreo" },
    { img: "./img/certificado_16.jpg", descripcion: "Introducción a las habilidades digitales" },
    { img: "./img/certificado_17.jpg", descripcion: "Incorporación de equipo médico con base al análisis de información" },
    { img: "./img/certificado_18.jpg", descripcion: "Organización de trabajo diario en el departamento de ingeniería biomédica" },
    { img: "./img/certificado_19.jpg", descripcion: "Mantenimiento a maquina de anestesia Plarre 13000" },
    { img: "./img/certificado_20.jpg", descripcion: "Programa 5 estrellas" },
    { img: "./img/certificado_21.jpg", descripcion: "Conceptos básicos de salud" },
    { img: "./img/certificado_22.jpg", descripcion: "Quirófano" },
    { img: "./img/certificado_23.jpg", descripcion: "Estimación de la vida útil del equipo médico: Procesos e información clave" }
]


function cargarCerfificados() {
    for (let i = 0; i < certificados.length; i++) {
        const element = document.createElement("div");
        const element2 = document.createElement("div");
        if (i === 0) {
            element.innerHTML =
                `
                    <button type="button" data-bs-target="#carouselCertificados" data-bs-slide-to="${i}"
                    class="active colorC" aria-current="true" aria-label="Slide ${i + 1}"></button>
                `;
            element2.innerHTML =
                `
                    <div class="carousel-item active">
                        <img src="${certificados[i].img}" class="d-block w-100" alt="${certificados[i].descripcion}">
                        
                    </div>
                `;
            indicadorCertificados.appendChild(element);
            elementCarroucel.appendChild(element2);
            continue;
        }

        element.innerHTML =
            `
            <button type="button" data-bs-target="#carouselCertificados" data-bs-slide-to="${i}"
                    class="colorC" aria-current="true" aria-label="Slide ${i+1}"></button>
        `;

        element2.innerHTML = 
        `
        <div class="carousel-item">
            <img src="${certificados[i].img}" class="d-block w-100" alt="${certificados[i].descripcion}">
            </div>
        `;
        indicadorCertificados.appendChild(element);
        elementCarroucel.appendChild(element2);
    }
}

cargarCerfificados();