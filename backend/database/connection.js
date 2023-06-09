// how to connect mongodb using mongoose
const mongoose = require('mongoose')
require('dotenv').config()

const Connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log(err)
    }
}

module.exports = Connect;