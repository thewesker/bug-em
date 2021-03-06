var Twit = require('twit')
var fs = require('fs')
var low = require('lowdb');
var childProcess = require('child_process')
var storage = require('lowdb/file-sync');
var session = low('./config.json', {'storage': storage});

var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

// filter the public stream by english tweets containing `#apple`
//
var stream = T.stream('statuses/filter', { follow: '25073877, 31176345, 236487888' }) 
stream.on('tweet', function (tweet) {
  if (tweet.user.screen_name === 'realDonaldTrump') {
	var b64content = fs.readFileSync('./pics/trump.gif', { encoding: 'base64' })
	var trumpmessages = session.object.trumpmessages;
	var randomtrumpmessage = trumpmessages[Math.floor(Math.random() * trumpmessages.length)];
// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "There isn't actually much point to this but whatever"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  var nameID = tweet.id_str;
  var name = tweet.user.screen_name;

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " " + randomtrumpmessage, media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Trump's Tweet with " + randomtrumpmessage)
		})
      }
    })
  })
}
  if (tweet.user.screen_name === 'poops_traveler') {
	var b64content = fs.readFileSync('./pics/popper.gif', { encoding: 'base64' })
	var poppermessages = session.object.poppermessages;
	var randompoppermessage = poppermessages[Math.floor(Math.random() * poppermessages.length)];
// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "There isn't actually much point to this but whatever"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  var nameID = tweet.id_str;
  var name = tweet.user.screen_name;

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " " + randompoppermessage, media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Pooper's Tweet with " + randompoppermessage)
		})
      }
    })
  })
}
	if (tweet.user.screen_name === 'WalshFreedom') {
	var b64content = fs.readFileSync('./pics/walsh.jpg', { encoding: 'base64' })
	var hulkmessages = session.object.hulkmessages;
	var randomhulkmessage = hulkmessages[Math.floor(Math.random() * hulkmessages.length)];
// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "There isn't actually much point to this but whatever"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  var nameID = tweet.id_str;
  var name = tweet.user.screen_name;

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " pay your child support", media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Walsh's Tweet with " + randomhulkmessage)
		})
      }
    })
  })
}
	if (tweet.user.screen_name === 'waynecoyne') {
	var b64content = fs.readFileSync('./pics/nero.gif', { encoding: 'base64' })
	var waynemessages = session.object.waynemessages;
	var randomwaynemessage = waynemessages[Math.floor(Math.random() * waynemessages.length)];
// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "There isn't actually much point to this but whatever"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  var nameID = tweet.id_str;
  var name = tweet.user.screen_name;

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " " + randomwaynemessage }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Wayne Coyne's Tweet with " + randomwaynemessage)
		})
      }
    })
  })
}
})
