const colors = require('colors');
const config = require('../../settings/config');
const { ActionRowBuilder, Colors, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'ready',
    once: false,
    execute: async (client) => {
        console.log(`[READY] ${client.user.tag} (${client.user.id}) is ready !`.green);

        async function clearChannel(channel) {
            let fetched;
            do {
                fetched = await channel.messages.fetch({ limit: 100 });
                await channel.bulkDelete(fetched);
            } while (fetched.size >= 2);
        }

        let Ticket = client.channels.cache.get(config.Ticket);
        await clearChannel(Ticket);
        await Ticket.send({
            components: [
                new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder() .setCustomId('_langfr') .setLabel('🇫🇷') .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder() .setCustomId('_langes') .setLabel('🇪🇸') .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder() .setCustomId('_langpt') .setLabel('🇵🇹') .setStyle(ButtonStyle.Primary),
                )
            ]
        });
    }
}