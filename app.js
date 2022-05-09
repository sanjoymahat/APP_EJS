
const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")
const app=express();
 let items=["Buy food","Cook Food","Eat Food"];
 let workItem=[];

 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));
 app.get("/",function(req,res){
   let day=date();
   res.render("list",{ListTitle:day,Newlistitems:items});
 });
 app.post("/",function(req,res){
  let item=req.body.newItem;
   if(req.body.list === "work"){
     workItem.push(item);
     res.redirect("/work");
   }else{
    items.push(item);
    res.redirect("/");
   }
 });
 app.get("/work",function(req,res){
  res.render("list",{ListTitle:"work List",Newlistitems:workItem
 });
 app.post("/work",function(req,res){
  let item=req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
});
});
app.get("/about",function(req,res){
  res.render("about");
 });

 app.listen(3000,function(){
   console.log("Server started on port 3000");
 })