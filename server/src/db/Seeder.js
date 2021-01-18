/* eslint-disable no-console */
import { connection } from "../boot.js"

import CarMakeSeeder from "./seeders/CarMakeSeeder.js"
import CarModelSeeder from "./seeders/CarModelSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding car makes")
    await CarMakeSeeder.seed()

    console.log("seeding car models")
    await CarModelSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}
export default Seeder