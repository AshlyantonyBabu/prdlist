var ex=require('express')
const app=ex();
var rt=require('./router/prdrut')
app.use("/prd",rt)
var bdy=require('body-parser')

app.set("view engine","ejs")
app.set("views","./src/view")
app.use(bdy.urlencoded({extended:true}));
app.listen(3444,function(req,res){
    console.log("server is ready....")

})
app.get("/",function(req,res){
res.render("prlg")
})
// app.get("/prdnew",function(req,res){
    
//     res.render("prdnew")
//     })
//     app.get("/prdview",function(req,res){
//         res.render("prdview",{list:prdlist})
//         })
//         app.get("/prdre",function(req,res){
//             res.render("prdre")
//             })
//             app.post("/prdaddls",function(req,res){
//                 var name=req.body.pname;
//                  var price=req.body.pprice;
//                     var qty=req.body.pqty;
//     res.render("prdaddls",{name1:name,price1:price,qty1:qty})
//             })