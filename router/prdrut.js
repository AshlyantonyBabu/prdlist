var expr=require('express')
var rout=expr.Router()
module.exports=rout;
var bdy=require('body-parser')
rout.use(bdy.urlencoded({extended:true}));
var prdlist=[{pn:"Pen",ppr:40,pqt:34},{pn:"Book",ppr:140,pqt:104},{pn:"Pencil",ppr:10,pqt:340}]
rout.get("/new",function(req,res){
    
    res.render("prdnew")
    })
  rout.get("/view",function(req,res){
        res.render("prdview",{list:prdlist})
        })
        rout.get("/re",function(req,res){
            res.render("prdre")
            })
           rout.post("/prdaddls",function(req,res){
                var name=req.body.pname;
                 var price=req.body.pprice;
                    var qty=req.body.pqty;
    res.render("prdaddls",{name1:name,price1:price,qty1:qty})
            })