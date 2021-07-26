import express from 'express'
import { getHotel, createHotel} from '../controllers/controller.js'



const router = express.Router()

router.get('/', getHotel)
router.post('/', createHotel)

export default router;