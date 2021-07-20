const express = require('express');
const app = express();
const validator = require('validator')

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const data =[

];


  



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

app.post('/temp/data/save',(req, res ,)=>{
  const postdata = req.body;
  data.push(postdata)
  console.log(typeof(postdata));
  res.status(200).send(postdata);
});

app.get('/temp/data/save',(req,res)=>{

  key = data.pop();
  console.log(key['name']);
  //console.log(datakey1);
  res.status(200).send(Object.keys(key));

})

app.post('/temp/data/load',(req,res)=>{
  const keydata = data.pop();
  const keykeys = Object.keys(keydata);
  const testdata = req.body;


  res.status(200).send(data);
});

app.get('/temp/data/load',(req,res)=>{
  const laodData = req.body;

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