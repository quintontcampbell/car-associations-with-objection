/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { CarMake } from "../../models/index.js"

class CarMakeSeeder {
  static async seed() {
    const carMakesData = [
      {
        name: "Toyota"
      },
      {
        name: "Hyundai"
      },
      {
        name: "Jeep"
      }
    ]

    for (const singleCarMakeData of carMakesData) {
      const currentCarMake = await CarMake.query().findOne({ name: singleCarMakeData.name })
      if (!currentCarMake) {
        await CarMake.query().insert(singleCarMakeData)
      }
    }
  }
}

export default CarMakeSeeder