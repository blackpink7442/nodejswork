const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

var data = {};
app.use(function (req, res, next) {
  req.headers['content-type'] = 'application/json';
  next();
});

app.get('/hello',(req, res) => {
  res.send('world');
});

app.post('/temp/data/save',(req, res ,)=>{
  const postdata = req.body;
  data = postdata;
  res.status(200).send(postdata);
});

app.get('/temp/data/save',(req,res)=>{
  key = data.pop();
  res.status(200).send(Object.keys(data)); //test get data key

})

app.post('/temp/data/load',(req,res)=>{
  keydata = data;
  const keykeys = Object.keys(keydata);
  const loadData = req.body;
  const loadkey = loadData['load'];

  var ansdata ="{"; 
  var BreakException = {}; 

  loadkey.forEach(function(item , i){

      try{
      keykeys.forEach(function(item2 , j){

        if(item === item2 ){
          let loopkey = item2;          
          let ans = "\""+item+"\":\""+keydata[item2]+"\",";
          ansdata = ansdata + ans; 
          throw BreakException;

        }else if(j >= keykeys.length-1){
          let notFound = "\"Not Found\",";
          ansdata = ansdata + notFound;
          throw BreakException;
        }

      });
    }catch(e){
      if (e!== BreakException) throw e;
    }
  });
  let finishans= "}";
  ansdata = ansdata + finishans;

  res.status(200).send(ansdata);
});

  // 5.首頁
let port = 3000;
  //3.設定port位置
app.listen(port,function(err){
  if(err) console.log(err);
  console.log("Server listening on port" , port);
});
  // 4.監聽 port