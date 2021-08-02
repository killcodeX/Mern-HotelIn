import express from 'express'
import { getHotel, getSingleHotel, getCityHotel, createHotel, updateHotel} from '../controllers/controller.js'



const router = express.Router()

router.get('/', getHotel)
router.get('/:id', getSingleHotel)
router.post('/', createHotel)
router.patch('/:id', updateHotel)
router.get('/city', getCityHotel)

export default router;