const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const db = require('./config/db');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is started and running at Port number ${PORT}`);
});
