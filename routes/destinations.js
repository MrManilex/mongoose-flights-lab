import { Router } from "express"
import * as destinationCtrl from '../controllers/destinations.js'
const router = Router()

router.get('/new', destinationCtrl.new)

router.post('/new', destinationCtrl.create)

export{
  router
}