const Model = require("./Model")

class CarMake extends Model {
  static get tableName() {
    return "carMakes"
  }
  static get relationMappings() {
    const CarModel = require("./CarModel")

    return {
      carModels: {
        relation: Model.HasManyRelation,
        modelClass: CarModel,
        join: {
          from: "carMakes.id",
          to: "carModels.carMakeId"
        }
      }
    }
  }
}

module.exports = CarMake