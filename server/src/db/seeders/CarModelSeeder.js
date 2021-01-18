/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { CarModel } from "../../models/index.js"

class CarModelSeeder {
  static async seed() {
    const carModelsData = [
      {
        name: "Camry",
        carMakeId: 1
      },
      {
        name: "Prius",
        carMakeId: 1
      },
      {
        name: "Elantra",
        carMakeId: 2
      },
      {
        name: "Wrangler",
        carMakeId: 3
      }
    ]

    for (const singleCarModelData of carModelsData) {
      const carModel = await CarModel.query().findOne({ name: singleCarModelData.name })
      if (!carModel) {
        await CarModel.query().insert(singleCarModelData)
      }
    }
  }
}

export default CarModelSeeder