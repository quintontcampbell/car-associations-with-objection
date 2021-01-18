import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

const clientRoutes = ["/car-makes/:id"]
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
