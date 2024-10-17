const express = require('express');
const TaskController = require('../controllers/TaskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, TaskController.create);
router.get('/', authMiddleware, TaskController.getAll);
router.put('/:id', authMiddleware, TaskController.update);
router.delete('/:id', authMiddleware, TaskController.delete);

module.exports = router;
