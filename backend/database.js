const mongoose = require('mongoose');
const mongoURI ='removed due to security reason'
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

