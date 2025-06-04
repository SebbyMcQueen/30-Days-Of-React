const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// #1
let bestUser = null;
let numOfSkills = 0;
for (const key in users) {
    const user = users[key];
    if (user.skills.length > numOfSkills) {
        numOfSkills = user.skills.length;
        bestUser = user;
    }
}
console.log(bestUser.email);

// #2
let numOfLoggedInUsers = 0;
let numOfUsersWithMoreThan50Points = 0;
for (const key in users) {
    const user = users[key];
    if (user.isLoggedIn) {
        numOfLoggedInUsers++;
    }
    if (user.points > 50) {
        numOfUsersWithMoreThan50Points++;
    }
}

// #3 (mern = MongoDB, Express, React, Node)
let numOfUsersWithMernSkills = 0;
for (const key in users){
    const user = users[key];
    if (user.skills.includes('MongoDB') && user.skills.includes('Express') && user.skills.includes('React') && user.skills.includes('Node')) {
        numOfUsersWithMernSkills++;
    }
}