module.exports = {
    async up(db) {
      await db.createCollection('orders');

      await db.collection('orders').insertOne({
        user_id: 1,
        products: [
          {
            product_id: 1,
            quantity: 2
          },
          {
            product_id: 2,
            quantity: 1
          }
        ],
        total_amount: 19.97,
        status: "pending",
      }
      );
    },
  
    async down(db) {
      await db.collection('orders').drop();
    },
  };