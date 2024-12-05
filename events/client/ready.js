const colors = require('colors');
const config = require('../../settings/config');
const { ActionRowBuilder, Colors, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

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
        let Role = client.channels.cache.get(config.RoleLang);
        await clearChannel(Role);
        
        async function getRole() {
            let Role = client.channels.cache.get(config.RoleLang);
            Role.send({
                embeds: [{
                    description: "> 🇫🇷 | Choisissez le rôle par rapport à votre langue.\n> 🇪🇸 | Elige el papel para tu idioma.\n> 🇵🇹 | Escolha a função para a sua língua.",
                    color: Colors.Blurple
                }],
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('french') .setLabel('🇫🇷') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('spanish') .setLabel('🇪🇸') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('portuguese') .setLabel('🇵🇹') .setStyle(ButtonStyle.Primary)
                    )
                ]
            });
        }
        await getRole();

        let RoleFr_Channel = client.channels.cache.get(config.RoleFr);
        await clearChannel(RoleFr_Channel);
        let RoleEs_Channel = client.channels.cache.get(config.RoleEs);
        await clearChannel(RoleEs_Channel);
        let RolePt_Channel = client.channels.cache.get(config.RolePt);
        await clearChannel(RolePt_Channel);

        async function getRoleFr() {
            let RoleFr = client.channels.cache.get(config.RoleFr);
            RoleFr.send({
                embeds: [{
                    description: `Pour éviter de vous ping trop régulièrement nous avons mis en place un système de notification pour vous :\n> - 📢 | <@&${config.Annonce}> : pour les annonce.\n> - 🎉 | <@&${config.Event}> : pour les événements.\n> - 📞 | <@&${config.Call}> : pour les conseils / appels.`,
                    color: Colors.Blurple
                }],
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('annonce_fr') .setLabel('📢') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('evenement_fr') .setLabel('🎉') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('conseil_fr') .setLabel('📞') .setStyle(ButtonStyle.Primary)
                    )
                ]
            })
        }
        async function getRoleEs() {
            let RoleEs = client.channels.cache.get(config.RoleEs);
            RoleEs.send({
                embeds: [{
                    description: `Para que no te pingamos demasiado, hemos establecido un sistema de notificación para ti :\n> - 📢 | <@&${config.Annonce}> : para anuncios.\n> - 🎉 | <@&${config.Event}> : para eventos.\n> - 📞 | <@&${config.Call}> : para consejos / llamadas.`,
                    color: Colors.Blurple
                }],
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('annonce_es') .setLabel('📢') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('evenement_es') .setLabel('🎉') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('conseil_es') .setLabel('📞') .setStyle(ButtonStyle.Primary)
                    )
                ]
            })
        }
        async function getRolePt() {
            let RolePt = client.channels.cache.get(config.RolePt);
            RolePt.send({
                embeds: [{
                    description: `Para evitar que o contactemos com demasiada regularidade, criámos um sistema de notificações para si:\n> - 📢 | <@&${config.Annonce}> : para anúncios.\n> - 🎉 | <@&${config.Event}> : para eventos.\n> - 📞 | <@&${config.Call}> : para dicas / chamadas.`,
                    color: Colors.Blurple
                }],
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('annonce_pt') .setLabel('📢') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('evenement_pt') .setLabel('🎉') .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder() .setCustomId('conseil_pt') .setLabel('📞') .setStyle(ButtonStyle.Primary)
                    )
                ]
            })
        }

        await getRoleFr();
        await getRoleEs();
        await getRolePt();

        async function getP0dv() {
            let Channel = client.channels.cache.get(config.Accompagnement)
            Channel.send({
                embeds : [
                    {   
                        thumbnail: {
                            url: "https://images-ext-1.discordapp.net/external/6bC7cOBM7gsQDuwj2Q3L_ZHFC9AxBM9b3KmWi7AgHe0/https/cdn.discordapp.com/avatars/1120007299218550904/e0b3c1bb724b498f406ab494cd0b32f8.png?format=webp&quality=lossless&width=160&height=160"
                        },
                        description: `## Bonjour à tous,\n\nJe me présente, **Clément**, accompagnateur spécialisé dans le domaine du **resell sur Vinted**.\n\nAvec **plus d’un an d’expérience** dans l’achat et la revente, je mets mes compétences à votre service pour vous aider à organiser votre activité, atteindre vos objectifs, et développer votre réussite sur cette plateforme.\n\n### Mon objectif :\nVous guider étape par étape, que vous soyez **débutant** ou déjà familiarisé avec Vinted.\nJe vous accompagnerai dans :\n- La création et l’optimisation de votre compte.\n- La mise en place de stratégies pour **générer vos premiers revenus** et développer une activité rentable.\n\n### Pourquoi me choisir ?\nJe suis à votre **disposition** pour :\n\n\n- Répondre à toutes vos questions.\n- Partager mon expertise.\n- Vous conseiller et vous accompagner au quotidien.\n\nSi vous souhaitez en savoir plus ou commencer dès maintenant, **n’hésitez pas à me contacter** !\n\n---\n\nAu plaisir de vous accompagner dans votre projet. 😊`,
                        color: Colors.Blurple,
                        footer: {
                            text: "Diamond Assistance",
                            iconURL: client.user.displayAvatarURL()
                        },
                        timestamp: new Date()
                    }
                ]
            })
        }

        async function getEven() {
            let Channel = client.channels.cache.get(config.Accompagnement);
            Channel.send({
                embeds: [
                    {
                        thumbnail: {
                            url: "https://images-ext-1.discordapp.net/external/evxh4ZWMZ14vsoFDRcgnlPMGEMElvyVKDMJ94sEN34E/https/cdn.discordapp.com/avatars/975444527588462643/7fa901b3d14a3fb228940aad27072b1b.png?format=webp&quality=lossless&width=160&height=160"
                        },
                        description: "Salut ! moi c’est Even\n\nJe fais du resell depuis plus de 8 mois et je fais quasiment 300-400 par semaine\n\nJe suis ici pour aider et accompagner les personnes qui sont sous mon aile afin qu’elle fasses leurs premier chiffre d’affaires rapidement,\nje t’aiderai dans :\n\nfondation de compte Vinted, photo, description / comment autobuy, autocop, quoi acheter et à quel prix et à combien le revendre, réponse a vaux questions ect !!\n\nIl y a une vingtaine de personnes sous mon ail actuellement qui on déjà fait leurs premier chiffres,  alors si tu  hésite à te lancer ou que tu as besoin de quoi que ce sois alors dm moi 😉",
                        color: Colors.Blurple,
                        footer: {
                            text: "Diamond Assistance",
                            iconURL: client.user.displayAvatarURL()
                        },
                        timestamp: new Date()
                    }
                ]
            })
        }

        async function getWaiko() {

        }

        async function getMath() {

        }

        async function getLee() {

        }

        async function getGamix() {
            let Channel = client.channels.cache.get(config.Accompagnement);
            Channel.send({
                embeds: [
                    {
                        thumbnail: {
                            url: "https://images-ext-1.discordapp.net/external/-E4rRqFXiCmJh2n6592KUr84tJIZNQfsKuFUzoRLQEg/https/cdn.discordapp.com/avatars/496357757113466881/b50b355f2d8a2b1c423c267ee533a5c2.png?format=webp&quality=lossless&width=160&height=160"
                        },
                        description: "Bonjour,\n\nJe m'appelle Léo et je suis accompagnateur personnel. J'ai plus de deux ans d'expérience dans le domaine du resell. Mon objectif est de vous aider à organiser votre quotidien et à atteindre vos objectifs personnels et professionnels.\n\nJe suis là pour vous offrir un soutien personnalisé et adapté à vos besoins. Grâce à mon expérience, je peux vous conseiller et vous accompagner efficacement.\n\nN'hésitez pas à me contacter pour en savoir plus.",
                        color: Colors.Blurple,
                        footer: {
                            text: "Diamond Assistance",
                            iconURL: client.user.displayAvatarURL()
                        },
                        timestamp: new Date()
                    }
                ]
            }) 
        }
        let Accompagnement_Panel = client.channels.cache.get(config.Accompagnement);
        await clearChannel(Accompagnement_Panel);

        await getGamix();
        await getEven();
        await getWaiko();
        await getLee();
        await getMath();
        await getP0dv();

        await Accompagnement_Panel.send({
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