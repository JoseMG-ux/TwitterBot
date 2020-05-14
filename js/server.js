const Twitter = require('twitter');

const Cliente = new Twitter({
     consumer_key:'PjWKDBC1vPyXDx2TPY9SFhb0u',
     consumer_secret:'iO24WuvipxKv0kVmTZD44vfWYjnW1b34KGLVzalZHplvDdXAG2',
     access_token_key:'883210347741675520-yk7hrRQB0oOnsgZkFRSuT60AdbEoDiP',
     access_token_secret:'K0r5xiMph5JWTxNgrWzcV9rzaVLBjja4cXtfRCVNmZV1j'
})
     
Cliente.post('statuses/update', {status:'JavaScript/NodeJs'})
          .then((tweet) => {
               console.log(tweet);

          })
          .catch((error) => {
               console.log(error);
          })




