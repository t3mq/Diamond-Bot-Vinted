const { ApplicationCommandType, PermissionFlagsBits } = require('discord.js');
module.exports = {
    name: 'add',
    description: '(➕) Add url for the autocop',
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "url",
            description: "URL to add",
            type: 3,
            required: true
        }
    ],
    execute: async (client, interaction, args) => {
        interaction.reply("pong !")
    }
}