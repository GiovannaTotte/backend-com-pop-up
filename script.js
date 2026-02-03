// Elementos do DOM
const botaoMensagem = document.getElementById('botao-mensagem');
const modal = document.getElementById('modal-popup');
const fechar = document.querySelector('.fechar');
const conteudoPopup = document.getElementById('conteudo-popup');

// Dados das mensagens criativas (simulando resposta do servidor)
const mensagensServer = [
  {
    status: 'sucesso',
    mensagem: 'Bem-vindo',
    descricao: 'Você conquistou uma mensagem especial do servidor',
    motiv: 'Parabéns por fazer parte do nosso projeto!'
  },
  {
    status: 'sucesso',
    mensagem: 'Excelente',
    descricao: 'Você demonstrou interesse em nossa aplicação',
    motiv: 'Continue explorando e aprendendo mais!'
  },
  {
    status: 'sucesso',
    mensagem: 'Sucesso',
    descricao: 'Você conseguiu acessar a aplicação com sucesso',
    motiv: 'Você está no caminho certo para dominar essa tecnologia!'
  },
  {
    status: 'sucesso',
    mensagem: 'Perfeito',
    descricao: 'Você interagiu corretamente com a aplicação frontend',
    motiv: 'Sua dedicação em aprender é admirável!'
  }
];

// Função para buscar a mensagem (aleatória do array)
async function carregarMensagem() {
  botaoMensagem.disabled = true;
  botaoMensagem.textContent = 'Carregando...';

  // Simular delay do servidor
  await new Promise(resolve => setTimeout(resolve, 600));

  try {
    // Selecionar uma mensagem aleatória
    const dados = mensagensServer[Math.floor(Math.random() * mensagensServer.length)];
    exibirPopup(dados);
  } catch (erro) {
    console.error('Erro ao carregar mensagem:', erro);
    conteudoPopup.innerHTML = `
      <h2>Erro</h2>
      <p>Não conseguimos carregar a mensagem.</p>
      <p>Tente novamente!</p>
    `;
    modal.style.display = 'block';
  } finally {
    botaoMensagem.disabled = false;
    botaoMensagem.textContent = 'Carregar Mensagem';
  }
}

// Função para exibir o pop-up com a mensagem
function exibirPopup(dados) {
  const horaAtual = new Date().toLocaleString('pt-BR');
  conteudoPopup.innerHTML = `
    <h2>${dados.mensagem}</h2>
    <p><strong>${dados.descricao}</strong></p>
    <p>${dados.motiv}</p>
    <div class="status">
      <p>Data: ${horaAtual}</p>
      <p>Status: <strong>${dados.status}</strong></p>
    </div>
  `;
  modal.style.display = 'block';
}

// Fechar o modal ao clicar no X
fechar.onclick = function() {
  modal.style.display = 'none';
}

// Fechar o modal ao clicar fora
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Event listener do botão
botaoMensagem.addEventListener('click', carregarMensagem);
