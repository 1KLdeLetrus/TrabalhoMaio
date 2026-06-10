const albuns = [
  {
    nome: "Kid A",
    artista: "Radiohead",
    preco: 149.90,
    tempo: "49:56",
    capa: "scr/styles/img/vinis/KidA.jpg"
  },
  {
    nome: "Kill 'Em All",
    artista: "Metallica",
    preco: 129.90,
    tempo: "51:20",
    capa: "scr/styles/img/vinis/KillEmAll.jpg"
  },
  {
    nome: "In Rainbows",
    artista: "Radiohead",
    preco: 159.90,
    tempo: "42:39",
    capa: "scr/styles/img/vinis/Radiohead_-_In_Rainbows.jpg"
  },
  {
    nome: "Sobrevivendo no Inferno",
    artista: "Racionais MC's",
    preco: 99.90,
    tempo: "73:57",
    capa: "scr/styles/img/vinis/Sobrevivendo_no_Inferno.jpg"
  },
  {
    nome: "The Queen Is Dead",
    artista: "The Smiths",
    preco: 139.90,
    tempo: "36:48",
    capa: "scr/styles/img/vinis/The_Queen_is_Dead.jpg"
  }
];
albuns.push(
  {
    nome: "I Wish I Was Here",
    artista: "Pink Floyd",
    preco: 89.90,
    tempo: "41:12",
    capa: "scr/styles/img/vinis/Wish_You_Were_Here.jpg"
  },
  {
    nome: "Rap é Compromisso",
    artista: "Sabotage",
    preco: 119.90,
    tempo: "58:47",
    capa: "scr/styles/img/vinis/RaoECompromisso.jpg"
  },
  {
    nome: "77",
    artista: "Talking Heads",
    preco: 129.90,
    tempo: "38:36",
    capa: "scr/styles/img/vinis/Talking_Heads_77.jpg"
  }
);

const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('vinylModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalArtist = document.getElementById('modalArtist');
const modalPrice = document.getElementById('modalPrice');
const modalDuration = document.getElementById('modalDuration');
const buyButton = document.getElementById('buyButton');

function formatPrice(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function openModal(album) {
  modalImage.src = album.capa;
  modalImage.alt = `${album.nome} - ${album.artista}`;
  modalName.textContent = album.nome;
  modalArtist.textContent = `Artista: ${album.artista}`;
  modalPrice.textContent = `Preço: ${formatPrice(album.preco)}`;
  modalDuration.textContent = `Duração: ${album.tempo}`;
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

function createProductCard(album) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const image = document.createElement('img');
  image.src = album.capa;
  image.alt = `${album.nome} - ${album.artista}`;
  card.appendChild(image);

  const info = document.createElement('div');
  info.className = 'product-info';

  const title = document.createElement('h3');
  title.textContent = album.nome;
  info.appendChild(title);

  const artist = document.createElement('p');
  artist.className = 'artist-name';
  artist.textContent = album.artista;
  info.appendChild(artist);

  const price = document.createElement('p');
  price.className = 'product-price';
  price.textContent = formatPrice(album.preco);
  info.appendChild(price);

  card.appendChild(info);
  card.addEventListener('click', () => openModal(album));

  return card;
}

function renderAlbums() {
  albuns.forEach(album => {
    productGrid.appendChild(createProductCard(album));
  });
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});

buyButton.addEventListener('click', () => {
  alert(`Pedido adicionado ao carrinho: ${modalName.textContent}`);
  closeModal();
});

renderAlbums();
