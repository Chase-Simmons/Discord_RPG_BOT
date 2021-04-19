// const fakeDB = require('./fakeDB');
// const create = require('./create');

// function register(incomingUser) {
//   let match = false;
//   let rep = {
//     content: {
//       title: `${incomingUser.username} has successfully registered.`,
//       description: 'Please **login** and **select class** for your character',
//       fields: [
//         {
//           name: '***Classes***',
//           value:
//             '---> **warrior**\n---> **cleric**\n---> **rogue**\n---> **mage**\n---> **archer**',
//           inline: true,
//         },
//       ],
//     },
//     statusCode: 2,
//   };

//   fakeDB.forEach((user) => {
//     if (user.id === incomingUser.id) {
//       match = true;
//     }
//   });

//   if (match === false) {
//     fakeDB.push({
//       id: incomingUser.id,
//       username: incomingUser.username,
//       loginStatus: 'offline',
//     });
//     create(incomingUser);
//   } else {
//     rep = { content: `you are already registered.`, statusCode: 1 };
//   }
//   return rep;
// }

// module.exports = (incomingUser) => {
//   return register(incomingUser);
// };
