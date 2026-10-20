const botaoMenu = document.querySelector('.menu-botao');
const navegacao = document.querySelector('.navegacao');
const botaoTopo = document.querySelector('.voltar-topo');
const formulario = document.querySelector('#formulario-contato');
const retorno = document.querySelector('#retorno-formulario');
const anoAtual = document.querySelector('#ano');
const statusPromocao = document.querySelector('#status-promocao');
const listaProdutos = document.querySelector('#lista-produtos');
const mensagemVazia = document.querySelector('#mensagem-vazia');
const filtros = document.querySelectorAll('.filtro');

if (botaoMenu && navegacao) {
  botaoMenu.addEventListener('click', () => {
    const aberto = navegacao.classList.toggle('aberta');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    botaoMenu.textContent = aberto ? '✕' : '☰';
  });

  document.querySelectorAll('.navegacao a').forEach((link) => {
    link.addEventListener('click', () => {
      navegacao.classList.remove('aberta');
      botaoMenu.setAttribute('aria-expanded', 'false');
      botaoMenu.setAttribute('aria-label', 'Abrir menu');
      botaoMenu.textContent = '☰';
    });
  });
}

if (botaoTopo) {
  window.addEventListener('scroll', () => {
    botaoTopo.classList.toggle('visivel', window.scrollY > 350);
  }, { passive: true });

  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (formulario && retorno) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!formulario.reportValidity()) return;
    retorno.textContent = 'Demonstração concluída! Sua mensagem não foi enviada nem armazenada.';
    formulario.reset();
  });
}

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

const produtos = [
  { id: 'espresso-da-casa', categoria: 'cafes', nome: 'Espresso da Casa', descricao: 'Uma dose intensa e aromática para quem ama café de verdade.', preco: 7.9, imagem: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80', alt: 'Xícara de espresso com aroma intenso' },
  { id: 'cappuccino-aurora', categoria: 'cafes', nome: 'Cappuccino Aurora', descricao: 'Espresso encorpado, leite vaporizado e uma camada cremosa de espuma.', preco: 13.9, imagem: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85', alt: 'Cappuccino com espuma cremosa' },
  { id: 'latte-caramelo', categoria: 'cafes', nome: 'Latte Caramelo', descricao: 'Café suave com notas de caramelo e leite cremoso em equilíbrio.', preco: 15.9, imagem: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80', alt: 'Café latte com cobertura de caramelo' },
  { id: 'mocha-chocolate', categoria: 'cafes', nome: 'Mocha de Chocolate', descricao: 'Espresso, chocolate e leite em uma bebida reconfortante e doce.', preco: 16.9, imagem: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80', alt: 'Mocha de chocolate em xícara' },
  { id: 'cafe-gelado', categoria: 'cafes', nome: 'Café Gelado', descricao: 'Uma opção refrescante com café intenso e textura cremosa.', preco: 14.9, imagem: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80', alt: 'Café gelado com gelo em taça' },
  { id: 'croissant-artesanal', categoria: 'salgados', nome: 'Croissant Artesanal', descricao: 'Massa folhada, leve e dourada, perfeita para acompanhar o café.', preco: 12.9, imagem: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85', alt: 'Croissant dourado e folhado' },
  { id: 'pao-de-queijo', categoria: 'salgados', nome: 'Pão de Queijo', descricao: 'Quentinho, crocante por fora e macio por dentro, sabor irresistível.', preco: 7.9, imagem: 'https://images.unsplash.com/photo-1590497948050-5b0c40f8492d?auto=format&fit=crop&w=900&q=80', alt: 'Pão de queijo artesanal em prato' },
  { id: 'sanduiche-natural', categoria: 'salgados', nome: 'Sanduíche Natural', descricao: 'Recheio fresco, pão macio e sabor equilibrado para a pausa do dia.', preco: 18.9, imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80', alt: 'Sanduíche natural em mesa de café' },
  { id: 'croissant-de-queijo', categoria: 'salgados', nome: 'Croissant de Queijo', descricao: 'Uma versão mais rica e saboreada da massa folhada clássica.', preco: 16.9, imagem: 'https://images.unsplash.com/photo-1614707267190-3e876ad3d575?auto=format&fit=crop&w=900&q=80', alt: 'Croissant de queijo em mesa' },
  { id: 'brownie-chocolate', categoria: 'doces', nome: 'Brownie de Chocolate', descricao: 'Textura úmida, intenso sabor de cacau e toque de aconchego.', preco: 12.9, imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80', alt: 'Brownie de chocolate em prato' },
  { id: 'cheesecake-frutas-vermelhas', categoria: 'doces', nome: 'Cheesecake de Frutas Vermelhas', descricao: 'Creme suave com calda de frutas vermelhas para finalizar com leveza.', preco: 17.9, imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80', alt: 'Cheesecake com frutas vermelhas' },
  { id: 'cookie-artesanal', categoria: 'doces', nome: 'Cookie Artesanal', descricao: 'Crosta dourada e centro macio para uma sobremesa simples e deliciosa.', preco: 8.9, imagem: 'https://images.unsplash.com/photo-1499636136210-6d10c4d1f7b4?auto=format&fit=crop&w=900&q=80', alt: 'Cookie artesanal com chocolate' },
  { id: 'bolo-cenoura', categoria: 'doces', nome: 'Fatia de Bolo de Cenoura', descricao: 'Cenoura, especiarias e cobertura de brigadeiro para um sabor clássico.', preco: 11.9, imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80', alt: 'Fatia de bolo de cenoura' }
];

const chaveFavoritos = 'cafeAuroraFavoritos';
let favoritos = JSON.parse(localStorage.getItem(chaveFavoritos) || '[]');
let filtroAtual = 'todos';

function formatarPreco(preco) {
  return `R$ ${preco.toFixed(2).replace('.', ',')}`;
}

function salvarFavoritos() {
  localStorage.setItem(chaveFavoritos, JSON.stringify(favoritos));
}

function obterProdutosFiltrados() {
  if (filtroAtual === 'favoritos') {
    return produtos.filter((produto) => favoritos.includes(produto.id));
  }

  if (filtroAtual === 'todos') {
    return produtos;
  }

  return produtos.filter((produto) => produto.categoria === filtroAtual);
}

function montarCardProduto(produto) {
  const ehFavorito = favoritos.includes(produto.id);
  const artigo = document.createElement('article');
  artigo.className = 'produto';
  artigo.innerHTML = `
    <button
      class="botao-favorito ${ehFavorito ? 'ativo' : ''}"
      type="button"
      data-id="${produto.id}"
      aria-label="${ehFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
      aria-pressed="${ehFavorito}"
    >
      <span aria-hidden="true">${ehFavorito ? '♥' : '♡'}</span>
    </button>
    <img src="${produto.imagem}" alt="${produto.alt}" loading="lazy">
    <div class="produto-texto">
      <span class="categoria">${produto.categoria}</span>
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <div class="produto-rodape">
        <strong>${formatarPreco(produto.preco)}</strong>
      </div>
    </div>
  `;

  const botaoFavorito = artigo.querySelector('.botao-favorito');
  botaoFavorito.addEventListener('click', () => alternarFavorito(produto.id));

  return artigo;
}

function renderizarProdutos() {
  if (!listaProdutos) return;

  const produtosFiltrados = obterProdutosFiltrados();
  listaProdutos.innerHTML = '';

  if (produtosFiltrados.length === 0) {
    mensagemVazia.hidden = false;
    mensagemVazia.textContent = filtroAtual === 'favoritos'
      ? 'Você ainda não marcou nenhum produto como favorito. Use o coração para salvar seus preferidos.'
      : 'Nenhum produto encontrado para esta categoria.';
    return;
  }

  mensagemVazia.hidden = true;
  produtosFiltrados.forEach((produto) => {
    listaProdutos.appendChild(montarCardProduto(produto));
  });
}

function alternarFavorito(idProduto) {
  const indice = favoritos.indexOf(idProduto);

  if (indice >= 0) {
    favoritos.splice(indice, 1);
  } else {
    favoritos.push(idProduto);
  }

  salvarFavoritos();
  renderizarProdutos();
}

if (filtros.length) {
  filtros.forEach((botao) => {
    botao.addEventListener('click', () => {
      filtroAtual = botao.dataset.filtro;
      filtros.forEach((item) => {
        const ativo = item === botao;
        item.classList.toggle('ativo', ativo);
        item.setAttribute('aria-pressed', String(ativo));
      });
      renderizarProdutos();
    });
  });
}

const slides = [
  {
    imagem: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
    alt: 'Mesa de café com xícaras e grãos ao fundo',
    categoria: 'Ambiente acolhedor',
    titulo: 'Cafés e conversas que inspiram o dia',
    descricao: 'Uma pausa cheia de aroma, conforto e energia para começar bem.'
  },
  {
    imagem: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
    alt: 'Pães artesanais e croissants em café',
    categoria: 'Artesanal',
    titulo: 'Sabores feitos para compartilhar',
    descricao: 'Croissants, pães e receitas que transformam cada visita em um momento especial.'
  },
  {
    imagem: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=80',
    alt: 'Interior de cafeteria com luz quente e sofisticação',
    categoria: 'Cafeteria',
    titulo: 'A atmosfera perfeita para desacelerar',
    descricao: 'Luz suave, espaço aconchegante e uma identidade de bem-estar em cada detalhe.'
  }
];

const carrosselTrack = document.querySelector('#carrossel-track');
const indicadores = document.querySelector('#carrossel-indicadores');
const botaoAnterior = document.querySelector('.carrossel-seta.anterior');
const botaoProxima = document.querySelector('.carrossel-seta.proxima');
const mediaQueryReducao = window.matchMedia('(prefers-reduced-motion: reduce)');
let indiceAtual = 0;
let intervaloAutoplay;

function atualizarCarrossel() {
  if (!carrosselTrack) return;

  carrosselTrack.style.transform = `translateX(-${indiceAtual * 100}%)`;

  const botoesIndicadores = indicadores ? indicadores.querySelectorAll('.indicador') : [];
  botoesIndicadores.forEach((botao, indice) => {
    botao.classList.toggle('ativo', indice === indiceAtual);
    botao.setAttribute('aria-selected', String(indice === indiceAtual));
  });
}

function montarCarrossel() {
  if (!carrosselTrack || !indicadores) return;

  carrosselTrack.innerHTML = slides.map((slide) => `
    <article class="carrossel-item" aria-label="${slide.titulo}">
      <img src="${slide.imagem}" alt="${slide.alt}" loading="lazy">
      <div class="carrossel-capa">
        <div class="carrossel-texto">
          <span>${slide.categoria}</span>
          <h3>${slide.titulo}</h3>
          <p>${slide.descricao}</p>
        </div>
      </div>
    </article>
  `).join('');

  indicadores.innerHTML = slides.map((_, indice) => `
    <button
      class="indicador ${indice === 0 ? 'ativo' : ''}"
      type="button"
      aria-label="Ir para slide ${indice + 1}"
      aria-selected="${indice === 0}"
      data-indice="${indice}"
    ></button>
  `).join('');

  indicadores.querySelectorAll('.indicador').forEach((botao) => {
    botao.addEventListener('click', () => {
      indiceAtual = Number(botao.dataset.indice);
      atualizarCarrossel();
      reiniciarAutoplay();
    });
  });

  atualizarCarrossel();
}

function irParaSlide(proximoIndice) {
  indiceAtual = (proximoIndice + slides.length) % slides.length;
  atualizarCarrossel();
}

function iniciarAutoplay() {
  if (mediaQueryReducao.matches || !carrosselTrack) return;

  clearInterval(intervaloAutoplay);
  intervaloAutoplay = setInterval(() => {
    irParaSlide(indiceAtual + 1);
  }, 5000);
}

function reiniciarAutoplay() {
  clearInterval(intervaloAutoplay);
  iniciarAutoplay();
}

if (botaoAnterior && botaoProxima) {
  botaoAnterior.addEventListener('click', () => {
    irParaSlide(indiceAtual - 1);
    reiniciarAutoplay();
  });

  botaoProxima.addEventListener('click', () => {
    irParaSlide(indiceAtual + 1);
    reiniciarAutoplay();
  });

  const carrosselContainer = document.querySelector('.carrossel');
  if (carrosselContainer) {
    let inicioTouch = 0;
    let fimTouch = 0;

    carrosselContainer.addEventListener('touchstart', (evento) => {
      inicioTouch = evento.touches[0].clientX;
    }, { passive: true });

    carrosselContainer.addEventListener('touchend', (evento) => {
      fimTouch = evento.changedTouches[0].clientX;
      const diferenca = fimTouch - inicioTouch;

      if (Math.abs(diferenca) > 50) {
        if (diferenca < 0) {
          irParaSlide(indiceAtual + 1);
        } else {
          irParaSlide(indiceAtual - 1);
        }
        reiniciarAutoplay();
      }
    }, { passive: true });
  }
}

function configurarPromocao() {
  if (!statusPromocao) return;

  const dataAtual = new Date();
  const diaSemana = dataAtual.getDay();
  const quartaFeira = diaSemana === 3;

  if (quartaFeira) {
    statusPromocao.textContent = 'Promoção disponível hoje!';
    statusPromocao.classList.add('ativo');
  } else {
    statusPromocao.textContent = 'Nossa promoção especial acontece toda quarta-feira!';
    statusPromocao.classList.remove('ativo');
  }
}

if (typeof window !== 'undefined') {
  montarCarrossel();
  iniciarAutoplay();
  configurarPromocao();
  renderizarProdutos();
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 760) {
    iniciarAutoplay();
  }
});
