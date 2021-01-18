import express from "express"

import { CarMake } from "../../../models/index.js"

const carMakesRouter = express.Router()

carMakesRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const carMake = await CarMake.query().findById(id)
    carMake.carModels = await carMake.$relatedQuery("carModels")
    res.status(200).json({ carMake: carMake })
  }
  catch(error) {
    res.status(500).json({ errors: error })
  }
})

export default carMakesRouter