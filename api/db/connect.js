// dbConnection.js
const mysql = require('mysql2');

// Configurações de conexão
const config = {
    host: 'db4free.net',  // Substitua pelo host do seu banco de dados
    user: 'escritoriojfc',       // Substitua pelo seu usuário do MySQL
    password: '12345678', // Substitua pela sua senha do MySQL
    database: 'escritoriojfc' // Substitua pelo nome do seu banco de dados
};

// Cria uma conexão com o banco de dados
const connection = mysql.createConnection(config);

// Conecta ao banco de dados
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como ID', connection.threadId);
});

// Exporta a conexão para ser usada em outros módulos
module.exports = connection;
