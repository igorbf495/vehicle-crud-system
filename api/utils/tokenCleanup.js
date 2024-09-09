const jwt = require('jsonwebtoken');
const invalidatedTokens = []; // Inicialize o array vazio

// Função para limpar tokens expirados
function cleanupExpiredTokens() {
    const now = Date.now();

    // Filtra tokens que ainda não expiraram
    invalidatedTokens = invalidatedTokens.filter(token => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return decoded.exp * 1000 > now; // Expiração em milissegundos
        } catch (err) {
            return false; // Se o token for inválido, remove
        }
    });
}

module.exports = {
    cleanupExpiredTokens,
    invalidatedTokens
};
