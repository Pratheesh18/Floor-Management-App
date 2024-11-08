const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');

const tableRoutes = require('./routes/tableRoutes');
const roomRoutes = require('./routes/roomRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/tables',tableRoutes);
app.use('/api/rooms',roomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server is running on ${PORT}`));