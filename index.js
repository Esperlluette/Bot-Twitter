const TwitterLite = require('twitter-lite')

console.log("+---------------------------+"+ 
          "\n|                           |"+ 
          "\n|      Début du script      |"+
          "\n|                           |"+
          "\n+---------------------------+")
;

const app = new TwitterLite({
    version: "2",
    extension: false, 
    bearer_token: process.env.BEARER_TOKEN
  })

  const user = new TwitterLite({  
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET,
    consumer_key: process.env.CONS_KEY,
    consumer_secret: process.env.CONS_SECRET
  })
