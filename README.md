# Maintainable

![](https://img.shields.io/badge/Created%20by-Victor%20Cesar%20Lopez-blue?style=for-the-badge)  
![](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB)  ![](https://img.shields.io/badge/npm%20package-express-orange?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-mongoose-cyan?style=flat-square&logo=npm)

## Table of Contents:  
[1. Description](#Description)  
[2. Acceptance Criteria](#Acceptance-Criteria)  
[3. Installation](#Installation)  
[4. Tests](#Tests)  
[5. License Details](#License-Details)
[6. Contributors](#Contributors)  
[7. Submission](#Submission)   
[8. Questions](#Questions)  

## Description:

This is an application for use in recording the details and maintenance history of the air conditioning assets of an HVAC service provider. It has been developed using a MERN SPA framework and accordingly, utilizes a MongoDB database, Express, React and Node with GraphQL.

## Acceptance Criteria:

- When you enter the command to invoke the application then the server is started and the Mongoose models are synced to the MongoDB database.  
- Testing API GET routes in ApolloServer for users, customers, air conditioners and reports return the data for each of these routes in a formatted JSON
- Testing API POST routes in ApolloServer are able to create users, customers, air conditioners and reports. Mutations are present in the server for editing and deleting data but have not been linked to the front-end due to restrictions on user permissions

## Installation:

1. Download the repo files from the link below
2. Run the following at the command line
```
    $ npm install
```
3. Start the server
```
    $ npm run develop
```

## Tests:  

Testing API calls with ApolloServer (example)  

---
uery {
  customers {
    _id
    name
    address
    phone
    acs {
      _id
      acName
      acBrand
      outModel
      outSerial
      inModel
      inSerial
      createdAt
      }
    }
    acs {
        _id
        acName
        acBrand
        outModel
        outSerial
        inModel
        inSerial
        createdAt
        reports {
            _id
            reportText
            createdAt
        }
    }
    users {
      _id
      username
      email
    }
  }

## License Details: 

This project is under no license. 

## Contributors:

Abdurraouf Sadi, Alik Margaryan, Chuong Vo, Tri Nguyen, Ahmad Anees and Mark Horsfall 

## Submission:

[Github repository](https://github.com/horsfalm/maintainable)

## Questions:

Email contributors at:  

horsfalm@gmail.com
A8sadi@gmail.com
margaryanalik7@gmail.com
vohoang2005@gmail.com
tri.nguyen1086@gmail.com
aaanees7@gmail.com

for additional questions