// /* eslint-disable */
const fs = require('fs');

fs.readFile('./app.js', (err, data) => {
  console.log('Start');

  setImmediate(() => {
    console.log('setImmediate');
  });

  // Promise.resolve().then(() => {
  //   console.log('Promise');
  // });

  process.nextTick(() => {
    console.log('nextTick');
  });

  // setTimeout(() => {
  //   console.log('setTimeout');
  // }, 0);

  console.log('End');
});
