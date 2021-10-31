import { Router } from "express"
import * as destinationCtrl from '../controllers/destinations.js'
const router = Router()

router.get('/new', destinationCtrl.new)

export{
  router
}