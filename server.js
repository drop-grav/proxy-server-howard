require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
// app.use(express.static(path.resolve(__dirname, './public')));
app.use(`/listing/:id`, express.static(path.resolve(__dirname, 'public')));

app.get('/api/listing/:listingID/photos', (req, res) => {
  const { listingID } = req.params;
  res.redirect(`http://ec2-54-183-105-172.us-west-1.compute.amazonaws.com:3100/api/listing/${listingID}`);
 });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
