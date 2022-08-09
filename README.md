# Selfbot-to-change-status-upon-receiving-webhook
 
Uses ngrok: https://ngrok.com

You can change the port it uses by changing line 29 at "3001", that's the port.

format for the webhook to send:

{
  "name": "stopped"
}

{
  "name": "driving"
}


That's really it, just put your token where it says "token" in the selfbot.js file.
