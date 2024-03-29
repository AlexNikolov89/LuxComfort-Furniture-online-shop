const mongoose = require('mongoose')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/User')
const Product = require('./models/Product')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const Order = require('./models/Order')

dotenv.config()


const importData = async () => {
    try {
      await  connectDB()
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
  
      const createdUsers = await User.insertMany(users)
  
      const adminUser = createdUsers[0]._id
  
      const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser }
      })
  
      await Product.insertMany(sampleProducts)
  
      console.log('Data Imported!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }
  
  const destroyData = async () => {
    try {
      await  connectDB()
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
  
      console.log('Data Destroyed!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }
  
  if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }

