const express = require('express')
const router = express.Router()

const quizController = require('../controllers/quiz.controller')

router.post('/new', quizController.create)
router.get('/quiz', quizController.list)
router.patch('/update', quizController.update)
router.delete('/delete/:id', quizController.delete)

module.exports = router