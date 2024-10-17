const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const UserController = {
    register: (req, res) => {
        const { username, password } = req.body;
        UserModel.create(username, password, (err) => {
            if (err) return res.status(500).send('Error registering user.');
            res.status(201).send('User registered successfully.');
        });
    },
    login: (req, res) => {
        const { username, password } = req.body;
        UserModel.findByUsername(username, (err, user) => {
            if (err || !user || !bcrypt.compareSync(password, user.password)) {
                return res.status(401).send('Invalid credentials.');
            }
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
            res.status(200).send({ auth: true, token });
        });
    }
};

module.exports = UserController;
