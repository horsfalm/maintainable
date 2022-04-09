const db = require('../config/connection');
const { Tech, Employee, Customer, Ac } = require('../models');

// const AcData = require('./AcData.json');
// const CustomerData = require('./CustomerData.json');
// const EmployeeData = require('./EmployeeData.json');
const TechData = require('./TechData.json');


db.once('open', async () => {
  try {
    // clean database
    await Tech.deleteMany({});
    // await Ac.deleteMany({});
    // await Customer.deleteMany({});
    // await Employee.deleteMany({});
    

    // bulk create each model
    await Tech.create(TechData);
    // await Ac.create(AcData);
    // await Customer.create(CustomerData);
    // await Employee.create(EmployeeData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
