var faker = require('faker');

module.exports = function(){
    var users = []; 
    for (var i = 1; i <550; i++) {
      users.push({
        id:i, 
        name:faker.name.firstName(), 
        username:faker.internet.userName(), 
        email:faker.internet.email()}
      )} 
        
        return { 
          users: users
        };
};

