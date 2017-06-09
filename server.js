const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

// array of posts
const posts = [];
// number of post shown in a page
const pageSize = 5;

const app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
// set up json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// index page
app.get('/', (req, res) => {
  let currentPage = 1;
  const totalPosts = posts.length;
  const pageCount = Math.ceil(totalPosts / pageSize);
  
  if(req.query.page) {
    currentPage = parseInt(req.query.page, 10);
  }
  
  const start = (currentPage - 1) * pageSize;
  const end = currentPage * pageSize;
	
  // render the `views/index.ejs` template with the list of posts (paginated)
  res.render('index', 
    {
	  posts: posts.slice(start, end),
	  pageSize: pageSize,
	  pageCount: pageCount,
	  currentPage: currentPage,
    }
  );
});

// POST endpoint to register a new post
app.post('/new', (req, res) => {
  // Create new object
  const post = {
	  id: posts.length + 1,
	  videoID: req.body.videoID,
	  timestamp: moment().unix(),
	  timestampStr: moment().format(),
  };
  
  // Add the new element at the beginning of the array
  posts.unshift(post);
  
  res.status(200).json(post);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});