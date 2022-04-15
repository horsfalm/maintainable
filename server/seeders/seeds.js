const faker = require('faker');

const db = require('../config/connection');
const { User, Customer, Ac } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Customer.deleteMany({});
  await Ac.deleteMany({});

  // create users
  const userData = [];

  const username = "User";
  const email = "User@gmail.com";
  const password = "$2b$10$/YE04hf.Hw3hHqID2ehD1es8PJiCAe1h7AIj16sA1ooHm3al7DwHa";

  userData.push({ username, email, password });
  

  const createdUsers = await User.collection.insertMany(userData);

  // create customers
  const customerData = [];

  for (let i = 0; i < 5; i += 1) {
    const name = faker.name.findName();
    const address = faker.address.streetAddress();
    const phone = faker.phone.phoneNumberFormat();

    customerData.push({ name, address, phone });
  }

  const createdCustomers = await Customer.collection.insertMany(customerData);

    // create acs
    let createdAcs = [];
    for (let i = 0; i < 10; i += 1) {
      const acName = faker.lorem.words(Math.round(Math.random() * 1) + 1);

      const brandArr = ["Daikin", "Mitsubishi Electric", "Mitsubishi Heavy Industries", "LG", "Fujitsu", "Panasonic"];
      
      function random() {
        return Math.random() * (6 - 1) + 1;
      }
      
      const acBrand = brandArr[Math.floor(random(1, 6))-1];

      const outModel = faker.random.alphaNumeric(8);
      const outSerial = faker.random.alphaNumeric(10);

      const inModel = faker.random.alphaNumeric(8);
      const inSerial = faker.random.alphaNumeric(10);
  
      const randomCustomerIndex = Math.floor(Math.random() * createdCustomers.ops.length);
      const { _id: customerId } = createdCustomers.ops[randomCustomerIndex];
  
      const createdAc = await Ac.create({ acName, acBrand, outModel, outSerial, inModel, inSerial });
  
      const updatedCustomer = await Customer.updateOne(
        { _id: customerId },
        { $push: { acs: createdAc._id } }
      );
  }

  console.log('all done!');
  process.exit(0);
});
