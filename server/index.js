const express = require('express');
const app = express();
const cors = require('cors');
const launches = require('./routes/launches');

// app.use(cors())

//send json data 
app.use(express.json())

//routes
app.use('/api/',launches)

const PORT =  process.env.PORT || 5000

app.listen(PORT, console.log(`listening on port ${PORT}`))
