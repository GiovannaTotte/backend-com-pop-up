const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota "/" com mensagem criativa
app.get('/', (req, res) => {
  res.json({
    status: 'sucesso',
    mensagem: '🎉 Bem-vindo ao nosso servidor! 🚀',
    descricao: 'Você conquistou um pop-up mágico que apareceu do nada!',
    emoji: '✨',
    timestamp: new Date().toLocaleString('pt-BR'),
    motiv: 'Continue assim, você está no caminho certo! 💪'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
