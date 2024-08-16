import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { createUser, getUsers, allUsers, getUserById, updateUser, deleteUser, loginUser } from './controllers/user.js'

const app = express()
app.use(express.json())

const connectDB = async () => {
const conn = await mongoose.connect(process.env.MONGO_URI)
  
  if(conn) {
    console.log('MongoDB connected')
  }
  else {
    console.log('MongoDB connection failed')
  }
} 
connectDB()

//API
app.post('/createuser', createUser)
app.get('/getusers', getUsers)
app.get('/allusers', allUsers)
app.get('/getuser/:id', getUserById)
app.put('/updateuser/:id', updateUser)
app.delete('/deleteuser/:id', deleteUser)
app.post('/login', loginUser)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


