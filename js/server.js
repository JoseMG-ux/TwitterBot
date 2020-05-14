//Required the twitter library we got with npm install twitter
//to interact with the twitter IP
const Twitter = require('twitter');

//instantiate a twitter type variable
const Client = new Twitter({
     consumer_key:'your consumer key',
     consumer_secret:'your consumer secret',
     access_token_key:'your access token',
     access_token_secret:'your access token secret'
})
//Post:To send the tweet   
Client.post('statuses/update', {status:'Your tweet that you are going to send'})

// (arg) => is Arrow function
          .then((tweet) => {//Receive the Tweet
               console.log(tweet);

          })
          .catch((error) => {//In case there is an error
               console.log(error);
          })




