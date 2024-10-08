AOS.init();


// Carrossel
const apartamentos = document.querySelectorAll('.beach');
let apartamentoAtual = 0;

function mostrarSlide(index) {
    apartamentos.forEach((beach, i) => {
        if (i === index) {
            beach.style.display = 'block';
        } else {
            beach.style.display = 'none';
        }
    });
}

function proximo() {
    apartamentoAtual = (apartamentoAtual +1) % apartamentos.length;
    mostrarSlide(apartamentoAtual);
}

function anterior() {
    apartamentoAtual = (apartamentoAtual -1 + apartamentos.length) % apartamentos.length;
    mostrarSlide(apartamentoAtual);
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.proximo').addEventListener('click', proximo);

// Mostra o primeiro cliente ao carregar a página
mostrarSlide(apartamentoAtual);