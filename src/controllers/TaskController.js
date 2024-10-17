const TaskModel = require('../models/TaskModel');

const TaskController = {
    create: (req, res) => {
        const { title } = req.body;
        TaskModel.create(req.userId, title, (err) => {
            if (err) return res.status(500).send('Error creating task.');
            res.status(201).send('Task created successfully.');
        });
    },
    getAll: (req, res) => {
        TaskModel.findAll(req.userId, (err, tasks) => {
            if (err) return res.status(500).send('Error fetching tasks.');
            res.status(200).send(tasks);
        });
    },
    update: (req, res) => {
        const { id } = req.params;
        const { title, completed } = req.body;
        TaskModel.update(id, title, completed, (err) => {
            if (err) return res.status(500).send('Error updating task.');
            res.status(200).send('Task updated successfully.');
        });
    },
    delete: (req, res) => {
        const { id } = req.params;
        TaskModel.delete(id, (err) => {
            if (err) return res.status(500).send('Error deleting task.');
            res.status(200).send('Task deleted successfully.');
        });
    }
};

module.exports = TaskController;
