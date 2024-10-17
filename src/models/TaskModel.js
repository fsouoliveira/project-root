const db = require('../database/database');

const TaskModel = {
    create: (userId, title, callback) => {
        db.run(`INSERT INTO tasks (user_id, title) VALUES (?, ?)`, [userId, title], callback);
    },
    findAll: (userId, callback) => {
        db.all(`SELECT * FROM tasks WHERE user_id = ?`, [userId], callback);
    },
    update: (taskId, title, completed, callback) => {
        db.run(`UPDATE tasks SET title = ?, completed = ? WHERE id = ?`, [title, completed, taskId], callback);
    },
    delete: (taskId, callback) => {
        db.run(`DELETE FROM tasks WHERE id = ?`, [taskId], callback);
    }
};

module.exports = TaskModel;
