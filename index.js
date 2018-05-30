
let request = require('request');

let apiKey = '137df653304d71fdb152150fa1ca0658';
let city = 'pune';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	let weather = JSON.parse(body)
  	let message = 'its ${weather.main.temp} degrees in ${weather.name}!';
    console.log(message);
  }
});


// let request = require('request');

// let apiKey = '137df653304d71fdb152150fa1ca0658';
// let city = 'gachibowli';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

// request(url, function (err, response, body) {
//   if(err){
//     console.log('error:', error);
//   } else {
//     let weather = JSON.parse(body)
//     let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//     console.log(message);
//   }
// });