const db = require('../config/connection');
const { Tech, Employee, Customer, Ac } = require('../models');

const AcData = require('./AcData.json');
const CustomerData = require('./CustomerData.json');
const EmployeeData = require('./EmployeeData.json');
const TechData = require('./TechData.json');


db.once('open', async () => {
  try {
    // clean database
    await Tech.deleteMany({});
    await Ac.deleteMany({});
    await Customer.deleteMany({});
    await Employee.deleteMany({});
    

    // bulk create each model
    await Tech.create(TechData);
    await Ac.create(AcData);
    await Customer.create(CustomerData);
    await Employee.create(EmployeeData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});


//   for (newClass of classes) {
//     // randomly add each class to a school
//     const tempSchool = schools[Math.floor(Math.random() * schools.length)];
//     tempSchool.classes.push(newClass._id);
//     await tempSchool.save();

//     // randomly add a professor to each class
//     const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
//     newClass.professor = tempProfessor._id;
//     await newClass.save();

//     // reference class on professor model, too
//     tempProfessor.classes.push(newClass._id);
//     await tempProfessor.save();