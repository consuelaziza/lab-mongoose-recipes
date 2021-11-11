const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
   // return Recipe.deleteMany()
   return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
   let newRecipe = {
      title: 'Curry Rice',
      level: 'Easy Peasy',
      ingredients: ['curry','rice'],
      cuisine: 'native',
      dishType: 'main_course',
      duration: 20,
      creator: 'consuela',
      created:''
    }
    return Recipe.create(newRecipe)
  })
  
  
    
    .then((result) => {
     return  Recipe.insertMany(data)
     
}

    
    )
  .then((update) => {
    return Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration:100})
  })
  .then((remove) => {
    return Recipe.deleteOne({ title: 'Carrot Cake' })
  })

  .then((closeData) => {
    mongoose.connection.close()
  })
  

  
    
  
   .catch(error => {
    console.log('Error connecting to the database', error);
   });
