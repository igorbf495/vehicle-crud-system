// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { cleanupExpiredTokens } = require('./utils/tokenCleanup'); // Importa a função corretamente
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importar os controladores
const userController = require('./routes/users');
const authRoutes = require('./routes/auth');
const vehiclesRoutes = require('./routes/vehicles');

// Configurar a limpeza de tokens para rodar periodicamente
setInterval(cleanupExpiredTokens, 60 * 60 * 1000); // Executa a limpeza a cada 1 hora

// Usar as rotas definidas no controlador de usuários
app.use('/api', userController);
// Usar as rotas de autenticação
app.use('/api', authRoutes);
// Usar as rotas dos veículos
app.use('/api', vehiclesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
