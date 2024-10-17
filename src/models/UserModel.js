const db = require('../database/database');
const bcrypt = require('bcryptjs');

const UserModel = {
    create: (username, password, callback) => {
        const hashedPassword = bcrypt.hashSync(password, 8);
        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword], callback);
    },
    findByUsername: (username, callback) => {
        db.get(`SELECT * FROM users WHERE username = ?`, [username], callback);
    }
};

module.exports = UserModel;
