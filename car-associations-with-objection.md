We now know how to associate our database tables and models so that we can query for associated data. Let's apply that process to an application using car makes and models

### Getting Started

```sh
et get car-associations-with-objection
cd car-associations-with-objection
createdb car_associations_development
yarn install
yarn run dev
```

You've been provided with a migration and model for `CarMake`s. Right now, your React frontend is built out to have a show page for each `CarMake` at the path "/car-makes/:id". However, these components expect the endpoint to have a `CarMake` object with nested `carModels` underneath it, as so:

```js
{
  carMake: {
    name: "Toyota",
    ...
    carModels: [
      {
        name: "Camry",
        ...
      },
      {
        name: "Prius",
        ...
      }
    ]
  }
}
```

Follow the below instructions to get your React frontend functioning properly!

1. Create a migration for a `carModels` table (believe me, you'll be glad when our model is called `CarModel` instead of `Model`). The `carModels` table should have a "name" column which holds a required string, a foreign key column for the `carMakeId`, as well as timestamps.

2. Create a `CarModel` model with core Objection functionality (no need to add validation, etc for this assignment).

3. Add the appropriate `relationMappings()` functions to both your `CarMake` and `CarModel` models. This should represent a one-to-many relationship where one `CarMake` has many `CarModel`s.

4. Run the provided Seeder files by running through the following commands from your `server` directory:
```sh
yarn run migrate:latest
yarn run db:seed
```

5. Once your `relationMappings()` are set up, update the endpoint provided in your `carMakesRouter` to nest the related `carModels` as an attribute of the selected `carMake`. If you're running into errors, be careful to review which words you've pluralized or kept singular!

6. Once your work is done, visit <http://localhost:3000/car-makes/1> to see if your car make and its related models are showing up properly!