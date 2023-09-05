const express = require('express')
const {movieslist, moviebyId, moviebooking, getMoviebookingbyId} = require('../controllers/movies')

const router = express.Router()

router.get('/',movieslist)
router.get('/:id',moviebyId)
router.post('/book',moviebooking)
router.get('/booking/:id',getMoviebookingbyId)

module.exports = router