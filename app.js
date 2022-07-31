const express = require('express');
const bodyParser = require('body-parser');
const { response, request } = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items = [];
var workItems = [];
app.get('/', function(req, res){
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var day = today.toLocaleDateString("en-US", options); 

// var weekend = "";
// switch (getDay) {
//     case 6:
//         weekend = "Saturday";
//         break;
//     case 5:
//         weekend = "Friday";
//         break;
//      case 4:
//             weekend = "Thursday";
//             break;
//     case 3:
//             weekend = "Wednesday";
//             break;
//     case 2:
//         weekend = "Tuesday";
//         break;
//     case 1:
//         weekend = "Monday";
//        // console.log(getDay);
//         break;
//     case 0:
//         weekend = "Sunday";
//         break;
//     default: 
//         console.log("error unknown" + getDay);
// }

 res.render('list', { listTitle: day, newListItem: items });
 //res.send();

})
app.post('/', function(req, res) {
 var item = req.body.newItem;
 if(req.body.list == "Work List") {
    workItems.push(item);
    res.redirect('/work');
 }
 else{
    items.push(item);
    res.redirect('/');
 }

 
});

app.get('/work', function(req, res) {
    res.render('list', { listTitle: "Work List", newListItem: workItems});
});
app.listen(3000, function(){
console.log('server is up and running');
});