
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001; 
const mongoURI = 'your_mongodb_atlas_uri'; 

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());
app.use(cors());


mongoose
  .connect(
    "mongodb+srv://ranj74384:admin2020@demo.z8hcj5m.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example API endpoint' });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });