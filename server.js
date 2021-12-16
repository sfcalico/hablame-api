const express = require('express');
const app = express();
const routesReport = require('rowdy-logger').begin(app);
const cors = require('cors');

app.use(express.json())
app.use(cors())

const userRoutes = require('./routes/userRoutes');
// const wordRoutes = require('./routes/wordRoutes');
// const collocationRoutes = require('./routes/collocationRoutes');

app.use('/users', userRoutes);
// app.use('/words', wordRoutes);
// app.use('/collocations', collocationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
    routesReport.print();
})

const models = require('./models')