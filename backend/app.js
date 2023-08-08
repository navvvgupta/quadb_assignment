const express=require('express')
const app=express()

const storeRouter = require('./routes/storeRouter');
const fetchRouter = require('./routes/fetcRouter');
app.use('/store', storeRouter);
app.use('/fetch', fetchRouter);

app.get('/',(req,res)=>{
    res.send('Hoi')
})

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();