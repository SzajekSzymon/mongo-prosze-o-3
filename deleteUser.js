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


async function deleteUser(name) {
  try {
    const deletedUser = await User.findOneAndDelete({ name });
    if (deletedUser) {
      console.log('User deleted successfully:', deletedUser);
    } else {
      console.log('User not found.');
    }
  } catch (error) {
    console.error('Error deleting user:', error.message);
  } finally {
    mongoose.disconnect();
  }
}


deleteUser('john_doe2');