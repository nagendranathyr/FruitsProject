const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});
//fruitsDB is the name of the database. If it doesn't exist, it is created.

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
                            //Fruit here is singular name collection we want to create.
                            //mongoose will convert it to plural as fruits

const fruit = new Fruit( {
  name: "Apple",
  rating: 10,
  review: "An apple day keeps doctor away"
});
//Creates a document using Fruit model.
//id is added automatically by mongoose.

// fruit.save();
//save method creates fruit document in Fruits collection in FruitDB. uncommented only once
//when inserting the data for the firstime.

const banana = new Fruit( {
  name: "Banana",
  rating: 7,
  review: "Best and cheap fruit"
});

const sapota = new Fruit( {
  name: "Sapota",
  rating: 5,
  review: "Sweet"
});

// Fruit.insertMany([banana, sapota], function(err) {
//   if(err)
//   {
//     console.log(err);
//   }
//   else {
//     console.log("Successfully inserted many documents into DB");
//   }
// })

//The above function is uncommented only when inserting the data for the first time.


//Reading data from MongoDB.
Fruit.find(function(err, fruits) {
  if(err)
  {
    console.log(err);
  }
  else {
    console.log(fruits);
  }
});
//fruits here is whatever find gets from DB related to fruits collection.
