const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGE_TYPING"] }
)

client.login("OTMzOTkzNTcwNjY5NTY4MDEw.YepnTA.D4ZJkHEOMf2McOUtEko1VW2-42Q")

client.on("ready", () => {
    console.log("bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "!youtube"){
        message.channel.send("Questo è il mio canale: GreenStar")
    }
})
