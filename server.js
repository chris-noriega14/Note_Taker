const express = require('express');
const viewRoutes = require('./routing/view-routes');
const apiRoutes = require('./routing/api-routes');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use("/api",apiRoutes);
app.use("/",viewRoutes);
app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));