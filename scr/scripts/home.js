// Carrossel de Produtos
const productCarousel = document.getElementById('productCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.product-card');
let currentPosition = 0;
const cardWidth = cards[0].offsetWidth;
const gap = 16;
const totalCards = cards.length;
let autoRotateInterval;
let isUserInteracting = false;

// Função para atualizar posição do carrossel
function updateCarouselPosition() {
    const offset = -currentPosition * (cardWidth + gap);
    productCarousel.style.transform = `translateX(${offset}px)`;
}

// Função para ir para o próximo
function nextSlide() {
    currentPosition++;
    if (currentPosition >= totalCards / 2) {
        currentPosition = 0;
    }
    updateCarouselPosition();
    resetAutoRotate();
}
// Função para ir para o anterior
function prevSlide() {
    currentPosition--;
    if (currentPosition = totalCards / 2) {
        currentPosition < 0;
    }
    updateCarouselPosition();
    resetAutoRotate();
}

// Função para rotação automática
function rotateCarousel() {
    if (!isUserInteracting) {
        nextSlide();
    }
}

// Função para resetar intervalo de rotação
function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    isUserInteracting = true;
    
    // Retomar rotação automática após 5 segundos de inatividade
    setTimeout(() => {
        isUserInteracting = false;
    }, 5000);
    
    autoRotateInterval = setInterval(rotateCarousel, 5000);
}

// Event listeners dos botões
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Suporte a swipe/toque
let touchStartX = 0;
let touchEndX = 0;

productCarousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isUserInteracting = true;
}, false);

productCarousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    resetAutoRotate();
}, false);

// Função para detectar swipe
function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// Iniciar rotação automática
autoRotateInterval = setInterval(rotateCarousel, 5000);

const produtos = [
  {
    nome: "Fone Bluetooth AirSound X1",
    preco: 89.90,
    quantidade: 15,
    imagem: "scr/styles/img/bluetooth_exemplop.webp",
    descricao: "Som sem fio, bateria duradoura e conforto para uso diário."
  },
  {
    nome: "Headphone Preto Bass Pro",
    preco: 149.90,
    quantidade: 8,
    imagem: "scr/styles/img/headphne_exemplodefinitivo.webp",
    descricao: "Design robusto e graves profundos para sessões de áudio imersivas."
  },
  {
    nome: "Headphone Branco Studio Max",
    preco: 159.90,
    quantidade: 12,
    imagem: "scr/styles/img/professional_exemplo.jpg",
    descricao: "Ajuste confortável e qualidade de som profissional para estúdio e streaming."
  },
  {
    nome: "Alto-falante SoundBox 20W",
    preco: 199.90,
    quantidade: 5,
    imagem: "scr/styles/img/image 5.png",
    descricao: "Potência de 20W e graves reforçados para uma experiência sonora mais vibrante."
  },
  {
    nome: "Fone com Fio Classic Audio",
    preco: 29.90,
    quantidade: 25,
    imagem: "scr/styles/img/decet_inear.webp",
    descricao: "Fone com fio econômico, ideal para quem busca qualidade de som a baixo custo."
  }
];

const modal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeProductModal');
const modalImage = document.getElementById('productModalImage');
const modalName = document.getElementById('productModalName');
const modalPrice = document.getElementById('productModalPrice');
const modalQuantity = document.getElementById('productModalQuantity');
const modalDescription = document.getElementById('productModalDescription');
const buyButton = document.getElementById('productBuyButton');

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function openProductModal(product) {
    modalImage.src = product.imagem;
    modalImage.alt = product.nome;
    modalName.textContent = product.nome;
    modalPrice.textContent = `Preço: ${formatCurrency(product.preco)}`;
    modalQuantity.textContent = `Estoque: ${product.quantidade} unidades`;
    modalDescription.textContent = product.descricao;
    modal.classList.remove('hidden');
}

function closeProductModal() {
    modal.classList.add('hidden');
}

function setupProductCardModals() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        const productIndex = index % produtos.length;
        card.addEventListener('click', () => {
            openProductModal(produtos[productIndex]);
        });
    });
}

closeModalBtn.addEventListener('click', closeProductModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeProductModal();
    }
});
buyButton.addEventListener('click', () => {
    alert(`Produto adicionado ao carrinho: ${modalName.textContent}`);
    closeProductModal();
});

setupProductCardModals();