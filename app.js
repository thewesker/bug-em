var Twit = require('twit')
var fs = require('fs')
var low = require('lowdb');
var childProcess = require('child_process')
var storage = require('lowdb/file-sync');
var session = low('./config.json', {'storage': storage});
var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path
var _ = require('wegweg')({
  globals: false,
  shelljs: false
})
var screenshot = require('url-screenshot')

var T = new Twit({
  consumer_key:         'XEpOzvNVnIL0z5cFggsZQzrTt',
  consumer_secret:      'tsOwdaDQXKisIYDhGXSo1552NLhgJdDtd3gglsBqBUQrbmGzG2',
  access_token:         '3220758997-Z5PIScOrRfjV3CsabXROoLObAMQyRxO9XZXu3qh',
  access_token_secret:  'K01MHdAtxZBflo1yf7yFG25j7180RrT16sSNkF663ExAg',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

// filter the public stream by english tweets containing `#apple`
//
var stream = T.stream('statuses/filter', { follow: '25073877, 1339835893, 179932936, 172933437' }) 
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
  if (tweet.user.screen_name === 'HillaryClinton') {
	var b64content = fs.readFileSync('./pics/hillary.gif', { encoding: 'base64' })
	var hillarymessages = session.object.hillarymessages;
	var randomhillarymessage = hillarymessages[Math.floor(Math.random() * hillarymessages.length)];
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
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " " + randomhillarymessage, media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Hillary's Tweet with " + randomhillarymessage)
		})
      }
    })
  })
}
	if (tweet.user.screen_name === 'HulkHogan') {
	var b64content = fs.readFileSync('./pics/hulk.gif', { encoding: 'base64' })
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
      var params = {in_reply_to_status_id: nameID, status: '@' + name + " " + randomhulkmessage, media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log("Replied to Hulk's Tweet with " + randomhulkmessage)
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
