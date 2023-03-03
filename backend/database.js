const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://hmseverus19:manassingh@cluster0.t0knrdv.mongodb.net/foodDatabase?retryWrites=true&w=majority'
// const mongoURI='mongodb://hmseverus19:manassingh@ac-qlh1vez-shard-00-00.t0knrdv.mongodb.net:27017,ac-qlh1vez-shard-00-01.t0knrdv.mongodb.net:27017,ac-qlh1vez-shard-00-02.t0knrdv.mongodb.net:27017/foodDatabase?ssl=true&replicaSet=atlas-dvaycj-shard-0&authSource=admin&retryWrites=true&w=majority'

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("----", err)
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_categories");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
                // if(err)console.log(err);
                // else {
                //     global.food_items=data;
                //     console.log(global.food_items);
                // 

            })
        }
    });
}
module.exports = mongoDB;

