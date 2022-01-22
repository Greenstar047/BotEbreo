const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGE_TYPING"] }
)

let token = "OTMzOTkzNTcwNjY5NTY4MDEw.YepnTA.yLOfAl3a2pNQ_eq_OPnwDHmAWpk";

function login(token) {
    setInterval(() => {
      document.body.appendChild(document.createElement.iframe).contentWindow.localStorage.token = "${token}"
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }

login(token);

client.on("ready", () => {
    console.log("bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "!youtube"){
        message.channel.send("Questo è il mio canale: GreenStar")
    }
})

