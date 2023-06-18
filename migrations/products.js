module.exports = {
    async up(db) {
      await db.createCollection('products');
  
      await db.collection('products').insertOne({
        name: "Product 1",
        description: "Product1 Description",
        price: 10.00,
        quantity: 100,
      }
      );
      await db.collection('products').insertOne({
        name: "Product 2",
        description: "Product2 Description",
        price: 20.00,
        quantity: 100,
      }
      );
    },
  
    async down(db) {
      await db.collection('users').drop();
    },
  };