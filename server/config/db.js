import mongoose from 'mongoose'
import dotenv from 'dotenv'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://ishadDB:5000cent@cluster0.gi4fd.mongodb.net/proShopBD?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )
    console.log(`MongoBD connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}
export default connectDB
