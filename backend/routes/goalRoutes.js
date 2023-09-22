const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController')
const { getDuckImage } = require('../middleware/duckAPIMiddleware')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, getDuckImage, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router