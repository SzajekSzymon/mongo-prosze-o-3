module.exports = {
  async up(db) {
    await db.createCollection('users');
    await db.collection('users').insertOne({
      name: "John Doe",
      email: "john@example.com",
      password: "hashed_password",
      address: "123 Main St",
      phone: "123-456-7890",
    }
    );
  },

  async down(db) {
    await db.collection('users').drop();
  },
};