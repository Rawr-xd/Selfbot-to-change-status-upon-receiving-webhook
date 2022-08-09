const {Client} = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate: false}); // All partials are loaded automatically
const port = 3001;

var bodyParser = require('body-parser'),
    http = require('http'),
    app = require('express')();

app.use(bodyParser.json());

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);

})
app.post('/', function(req, res){
    res.sendStatus(200);
    if(req.body.name === "driving"){
      console.log(JSON.stringify(req.body.name));
      client.user.setActivity('driving rn!');
    } else if(req.body.name === "stopped"){
      console.log(JSON.stringify(req.body.name));
      client.user.setActivity('not driving rn!');
    }
    
});

//create server
http.createServer(app).listen(port, function () {
   console.log('Server started: Listening on port' + port);
   client.login('token');
});
