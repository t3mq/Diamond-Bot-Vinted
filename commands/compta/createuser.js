const { ApplicationCommandType, PermissionFlagsBits } = require('discord.js');
module.exports = {
    name: 'create-user',
    description: '(➕) permet de créer un utilisateur pour la comptabilité',
    type: ApplicationCommandType.ChatInput,
    execute: async (client, interaction, args) => {
        // interaction.reply({
        //     content: "Votre compte utilisateur a bien été créé",
        //     ephemeral: true
        // });
        interaction.reply({
            content: "Commande indisponible pour le moment !",
            ephemeral: true
        })
    }
}