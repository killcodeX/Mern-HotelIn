import express from 'express'
import { getHotel, createHotel, updateHotel} from '../controllers/controller.js'



const router = express.Router()

router.get('/', getHotel)
router.post('/', createHotel)
router.patch('/:id', updateHotel)

export default router;