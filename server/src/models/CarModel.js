const Model = require('./Model')

class CarModel extends Model {
  static get tableName() {
    return "carModels"
  }
  static get relationMappings() {
    const CarMake = require('./CarMake')
    return {
      carMake: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarMake,
        join: {
          from: "carModels.carMakeId",
          to: "carMakes.id"
        }
      }
    }
  }
}

module.exports = CarModel