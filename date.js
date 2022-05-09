module.exports=getDate;

function getDate(){
let today=new Date();
   let aptions={weekday:"long",day:"numeric", month:"long"};
   return today.toLocaleDateString("en-US",aptions);
};