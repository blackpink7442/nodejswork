const express = require('express');
const app = express();
const validator = require('validator')

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const data = 
    {
      "a" : "apple",
      "b" : "banana",
      "c" : "c"
    }


app.use(function (req, res, next) {
  req.headers['content-type'] = 'application/json';
  next();
});

app.get('/',(req, res) => {
  res.send({
    mes:' Hello!',
    user:{}
  });
});

app.post('/temp/data/save',(req, res)=>{
  const postdata = req.body;

  if(data[0] != 0){
    //data.shift();
    data.push(postdata);
  }else{
    data.push(postdata);
  }  

  if(data.length != 0){
    res.status(401).send('No Data')
  }else {
    res.status(200).send('Ok Data')
  }

  const dataname = data["name"];

  console.log(typeof(dataname))
});

app.get('/temp/data/save',(req,res)=>{
  res.status(200).send(data);
})

app.get('/temp/data/load',(req,res)=>{
  res.status(200).send(data);
});

  // 5.首頁
let port = 3000;
  //3.設定port位置
app.listen(port,function(err){
  if(err) console.log(err);
  console.log("Server listening on port" , port);
});
  // 4.監聽 port