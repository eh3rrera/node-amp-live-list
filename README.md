# node-amp-live-list

A sample app to show how the [amp-live-list](https://www.ampproject.org/docs/reference/components/amp-live-list) works (by showing a feed of YouTube videos) with the help of a Node.js/Express backend.

Follow the tutorial at https://blog.pusher.com/building-a-realtime-feed-with-node-js-and-amp/

# Requirements

- [Node.js](https://nodejs.org/en/).
- [Postman](https://www.getpostman.com/) or [curl](https://curl.haxx.se/).
- Optionally, [Chrome](https://www.google.com/chrome/browser/desktop/index.html) for better testing.

# Installation
1. Clone this repository and `cd` into it.
2. Execute `npm install` to download dependencies.
3. Execute `node server.js` to start the Node.js server.
4. Go to http://localhost:3000.
5. To register videos, you can use a tool like Postman to hit the http://localhost:3000/new endpoint with a JSON payload like the following:
```
{
  "videoID": "[YOUTUBE_VIDEO_ID]"
}
```

Or cURL:
```
# POST
curl -H "Content-Type: application/json" -X POST -d '{"videoID":"[YOUTUBE_VIDEO_ID]"}' http://localhost:3000/new
    
# In Windows, change single quotes to quotation marks and escape the ones inside curly brackets
curl -H "Content-Type: application/json" -X POST -d "{\"videoID\":\"[YOUTUBE_VIDEO_ID]\"}" http://localhost:3000/new
    
# Or use file, for example data.json
curl -H "Content-Type: application/json" -X POST --data @data.json http://localhost:3000/new
```

After a few seconds (fifteen at most), the button to load the new videos should be visible. Click on it to show the updates.

# License
MIT
