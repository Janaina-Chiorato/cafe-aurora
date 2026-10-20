const botaoMenu = document.querySelector('.menu-botao');
const navegacao = document.querySelector('.navegacao');
const botaoTopo = document.querySelector('.voltar-topo');
const formulario = document.querySelector('#formulario-contato');
const retorno = document.querySelector('#retorno-formulario');

botaoMenu.addEventListener('click', () => {
  const aberto = navegacao.classList.toggle('aberta');
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  botaoMenu.textContent = aberto ? '✕' : '☰';
});

document.querySelectorAll('.navegacao a').forEach(link => {
  link.addEventListener('click', () => {
    navegacao.classList.remove('aberta');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
    botaoMenu.textContent = '☰';
  });
});

window.addEventListener('scroll', () => {
  botaoTopo.classList.toggle('visivel', window.scrollY > 350);
}, { passive: true });

botaoTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  if (!formulario.reportValidity()) return;
  retorno.textContent = 'Demonstração concluída! Sua mensagem não foi enviada nem armazenada.';
  formulario.reset();
});

document.querySelector('#ano').textContent = new Date().getFullYear();
