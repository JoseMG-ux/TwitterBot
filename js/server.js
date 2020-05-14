const Twitter = require('twitter');

const Cliente = new Twitter({
     consumer_key:'you consumer key',
     consumer_secret:'you consumer secret',
     access_token_key:'883210347741675520-you acces token',
     access_token_secret:'you acces token secret'
})
     
Cliente.post('statuses/update', {status:'JavaScript/NodeJs'})
          .then((tweet) => {
               console.log(tweet);

          })
          .catch((error) => {
               console.log(error);
          })




