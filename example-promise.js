function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Belgrade', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Novi Sad').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a + b);
    } else {
      reject('a & b need to be numbers');
    }
  });
}

addPromise(2,3).then(function (num) {
  console.log('success', num);
}, function (err) {
  console.log('error', err);
});

addPromise('sum',3).then(function (num) {
  console.log('bad success', num);
}, function (err) {
  console.log('error', err);
});
