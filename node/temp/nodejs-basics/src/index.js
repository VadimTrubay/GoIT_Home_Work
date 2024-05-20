import express from 'express';

const app = express();

const PORT = 3000;

const data = {
  name: 'John',
  age: 30,
};

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});


app.get('/', (req, res) => {
  console.log(req.url.split('=')[1]);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});