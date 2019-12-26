const express=require('express')
const app=express();
// const hbs=require('hbs')
// app.use(date=(req,res,next)=>{
//     let requestAT=new Date();
//     console.log(requestAT)
//     next()
// })

// app.set("view engine", 'hbs')


// app.get('/connectuser',(req,res)=>{
//     res.render('user.hbs')
// })
app.use(
    (date = (req, res, next) => {
      let time = new Date().getHours;
      time < 17 || time > 8
        ? res.send("<h1> The office is not open now</h1>")
        : next();
    })
  );

app.get(express.static(__dirname+'/view'))

app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/view/home.html')
})

// app.get("/user",(req,res)=>{
    
//     res.send('the home page is connected')
// })

app.listen(3000,(err)=>{
if(err) console.log('server is not rannig')
else console.log('server is rannig in port 3000')
});