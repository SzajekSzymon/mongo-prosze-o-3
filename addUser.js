const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  phone: String,
}));

const MONGODB_URI = 'mongodb://localhost:27017/shop';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database.');
});

async function addUser(name, email, password, address, phone) {
  try {
    const user = new User({
      name,
      email,
      password,
      address,
      phone
    });
    const savedUser = await user.save();
    console.log('User added successfully:', savedUser);
  } catch (error) {
    console.error('Error adding user:', error.message);
  } finally {
    mongoose.disconnect();
  }
}

addUser('john_doe2', 'john@example.com', 'password123', 'Kwiatowa 5', '123456789');