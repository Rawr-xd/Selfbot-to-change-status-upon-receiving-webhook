# Selfbot-to-change-status-upon-receiving-webhook
 
Uses ngrok: https://ngrok.com

To install: npm install

You can change the port it uses by changing the port constant on line 5

format for the webhook to send:

{
  "name": "stopped"
}

{
  "name": "driving"
}


That's really it, just put your token where it says "token" in the selfbot.js file.

KNOWN ISSUES:
Doesn't seem to set online status(?), I think it's an issue with discord.js-self, I'm not entirely sure. If you have a fix dm me on discord.
