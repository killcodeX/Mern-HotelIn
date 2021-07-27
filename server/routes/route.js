import express from 'express'
import { getHotel, getSingleHotel, createHotel, updateHotel} from '../controllers/controller.js'



const router = express.Router()

router.get('/', getHotel)
router.get('/:id', getSingleHotel)
router.post('/', createHotel)
router.patch('/:id', updateHotel)

export default router;