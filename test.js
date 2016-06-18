var Twit = require('twit')
var fs = require('fs')

var T = new Twit({
  consumer_key:         'XEpOzvNVnIL0z5cFggsZQzrTt',
  consumer_secret:      'tsOwdaDQXKisIYDhGXSo1552NLhgJdDtd3gglsBqBUQrbmGzG2',
  access_token:         '3220758997-Z5PIScOrRfjV3CsabXROoLObAMQyRxO9XZXu3qh',
  access_token_secret:  'K01MHdAtxZBflo1yf7yFG25j7180RrT16sSNkF663ExAg',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

// filter the public stream by english tweets containing `#apple`
//
var stream = T.stream('statuses/filter', { follow: '25073877, 1339835893, 216776631' }) 
stream.on('tweet', function (tweet) {
	if (tweet.user.screen_name === 'realDonaldTrump') {
	var b64content = fs.readFileSync('./pics/trump.gif', { encoding: 'base64' })

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  var nameID = tweet.id_str;
  var name = tweet.user.screen_name;

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " Delete your account.", media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Trump's Tweet")
		})
      }
    })
  })
}
  if (tweet.user.screen_name === 'HillaryClinton') {
	var b64content = fs.readFileSync('./pics/hillary.gif', { encoding: 'base64' })

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  var nameID = tweet.id_str;
  var name = tweet.user.screen_name;

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " Release the Benghazi emails!", media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Hillary's Tweet")
		})
      }
    })
  })
}
	if (tweet.user.screen_name === 'BernieSanders') {
	var b64content = fs.readFileSync('./pics/bernie.gif', { encoding: 'base64' })

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  var nameID = tweet.id_str;
  var name = tweet.user.screen_name;

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " Drop out, Bernie!", media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Bernie's Tweet")
		})
      }
    })
  })
}
})