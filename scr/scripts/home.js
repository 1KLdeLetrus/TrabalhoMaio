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
    if (currentPosition < 0) {
        currentPosition = totalCards / 2 - 1;
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
