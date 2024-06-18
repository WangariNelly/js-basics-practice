/* The .then() method is called after a Promise is fulfilled (resolved) and it returns a new Promise that will resolve to the value returned by the callback function. It takes up to two arguments, the first is the callback to be called when the Promise is resolved and the second is the callback to be called if the Promise is rejected. The .finally() method is called when the Promise is settled (either resolved or rejected). It provides a way to run final code that should be executed regardless of whether the Promise was resolved or rejected.*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved!');
    }, 2000);
  });
  
  promise
    .then(result => {
      console.log(result); // logs 'Resolved!'
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log('Promise settled.'); // logs 'Promise settled.'
    });