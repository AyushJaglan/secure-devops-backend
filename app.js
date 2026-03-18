const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');

const password = "123456"; // hardcoded secret

app.get('/test', (req, res) => {
    eval("console.log('unsafe')");
    res.send("test route");
    
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`<h1>${query}</h1>`); // XSS vulnerability
});
});
});