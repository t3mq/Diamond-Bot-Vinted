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
            content: `🇫🇷 | Veuillez indiquer les langues que vous parlez avant d’ouvrir un ticket.\n🇪🇸 | Por favor, indique los idiomas que hablas antes de abrir un ticket.\n🇵🇹 | Por favor, indique os idiomas que você fala antes de abrir um ticket.`,
            components: [
                new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder() .setCustomId('_langfr') .setLabel('🇫🇷') .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder() .setCustomId('_langes') .setLabel('🇪🇸') .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder() .setCustomId('_langpt') .setLabel('🇵🇹') .setStyle(ButtonStyle.Primary),
                )
            ]
        });

        let Accompagnement = client.channels.cache.get(config.Accompagnement);
        clearChannel(Accompagnement);

        async function getP0dv() {
            let Channel = client.channels.cache.get(config.Accompagnement)
            Channel.send({
                embeds : [
                    {   
                        thumbnail: {
                            url: client.user.displayAvatarURL()
                        },
                        description: `## Bonjour à tous,\n\nJe me présente, **Clément**, accompagnateur spécialisé dans le domaine du **resell sur Vinted**.\n\nAvec **plus d’un an d’expérience** dans l’achat et la revente, je mets mes compétences à votre service pour vous aider à organiser votre activité, atteindre vos objectifs, et développer votre réussite sur cette plateforme.\n\n### Mon objectif :\nVous guider étape par étape, que vous soyez **débutant** ou déjà familiarisé avec Vinted.\nJe vous accompagnerai dans :\n- La création et l’optimisation de votre compte.\n- La mise en place de stratégies pour **générer vos premiers revenus** et développer une activité rentable.\n\n### Pourquoi me choisir ?\nJe suis à votre **disposition** pour :\n\n\n- Répondre à toutes vos questions.\n- Partager mon expertise.\n- Vous conseiller et vous accompagner au quotidien.\n\nSi vous souhaitez en savoir plus ou commencer dès maintenant, **n’hésitez pas à me contacter** !\n\n---\n\nAu plaisir de vous accompagner dans votre projet. 😊`,
                        color: Colors.Blurple,
                        footer: {
                            text: "Diamond Assistance",
                            iconURL: client.user.displayAvatarURL()
                        }
                    }
                ]
            })
        }

        async function getEven() {

        }

        async function getWaiko() {

        }

        async function getMath() {

        }

        async function getLee() {

        }

        await getEven();
        await getWaiko();
        await getLee();
        await getMath();
        await getP0dv();

        let Accompagnement_Panel = client.channels.cache.get(config.Accompagnement);
        Accompagnement_Panel.send({
            components: [
                new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                    .setCustomId('_accompagnement')
                    .setPlaceholder('Sélectionnez un accompagnateur...')
                    .addOptions(
                        new StringSelectMenuOptionBuilder()
                        .setLabel('Even')
                        .setValue('even'),
                        new StringSelectMenuOptionBuilder()
                        .setLabel('Waiko')
                        .setValue('waiko'),
                        new StringSelectMenuOptionBuilder()
                        .setLabel('Lee')
                        .setValue('lee'),
                        new StringSelectMenuOptionBuilder()
                        .setLabel('Math')
                        .setValue('math'),
                        new StringSelectMenuOptionBuilder()
                        .setLabel('P0dv')
                        .setValue('podv'),
                    )
                )
            ]
        })
    }
}