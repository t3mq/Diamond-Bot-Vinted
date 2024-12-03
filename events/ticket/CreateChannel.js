const colors = require('colors');
const config = require('../../settings/config');
const { ActionRowBuilder, Colors, PermissionFlagsBits, ButtonStyle } = require('discord.js');
const { StringSelectMenuBuilder } = require('@discordjs/builders');
const { ButtonBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if(!interaction.isButton()) return;

        if (interaction.customId === "_langfr") {
            interaction.reply({
                content: "Besoin d'aide ? Une question ?\n\nBienvenue dans notre salon de création de ticket d'assistance.\n\nPour obtenir de l'aide par rapport à une question ou une demande spécifique, clique sur le bouton \"🎫\" ci-dessous pour ouvrir un ticket d'assistance.",
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('ticket_fr') .setLabel('🎫') .setStyle(ButtonStyle.Primary)
                    )
                ],
                ephemeral: true
            })
        }
        else if (interaction.customId === "_langes") {
            interaction.reply({
                content: "¿Necesitas ayuda? ¿Tienes alguna pregunta?\n\nBienvenido al salón de creación de ticketes de ayuda.\n\nPara que podamos ayudarte con tu problema, debes presionar el botón \"🎫\" a continuación, lo que abrirá un ticket.",
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('ticket_es') .setLabel('🎫') .setStyle(ButtonStyle.Primary)
                    )
                ],
                ephemeral: true
            })
        }
        else if (interaction.customId === "_langpt") {
            interaction.reply({
                content: "Precisa de ajuda? Tem uma pergunta?\n\nBem-vindo à nossa sala de criação de bilhetes de assistência.\n\nPara obter ajuda com uma pergunta ou pedido específico, clique no botão \“🎫\” abaixo para abrir um tíquete de suporte.",
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('ticket_pt') .setLabel('🎫') .setStyle(ButtonStyle.Primary)
                    )
                ],
                ephemeral: true
            })
        }

        

        const support_fr = config.SupportFr;
        const support_es = config.SupportEs;
        const support_pt = config.SupportPt;

        if (interaction.customId === "ticket_fr") {
            let ticket_fr = interaction.guild.channels.create({
                name: `🎫-Ticket-de-${interaction.user.username}`,
                parent: config.Category_fr,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: support_fr,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                    }
                ],
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket d'assistance",
                        description: "**Bonjour, et merci d'avoir ouvert un ticket ! 🎟️**\n\nPour nous aider à résoudre votre problème ou répondre à votre question, pourriez-vous nous donner plus de détails ?\n\n- Quelle est la nature de votre problème ou de votre question ?\n- Si c'est un problème technique, avez-vous déjà essayé quelque chose pour le résoudre ?\n- Toute autre information importante serait également utile !\n\nNous sommes là pour vous aider, alors n'hésitez pas à partager autant de détails que possible. 😊\n\nMerci,\nL'équipe de support",
                        color: Colors.Blurple,
                        footer: {
                            text: `Ticket créé par ${interaction.user.tag}`,
                            iconURL: interaction.user.displayAvatarURL({ dynamic: true })
                        }
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('_close') .setLabel('Fermer le ticket') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                })
            });
        }

        if (interaction.customId === "ticket_es") {
            let ticket_es = interaction.guild.channels.create({
                name: `🎫-Ticket-de-${interaction.user.username}`,
                type: ChannelType.GuildText,
                parent: config.Category_es,
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                        id: support_es,
                        allow: ['VIEW_CHANNEL'],
                    }
                ],
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket de soporte",
                        description: "**¡Hola, y gracias por abrir un ticket! 🎟️**\n\nPara ayudarnos a resolver tu problema o responder a tu pregunta, ¿podrías darnos más detalles?\n\- ¿Cuál es la naturaleza de tu problema o pregunta?\n- Si es un problema técnico, ¿has intentado algo para solucionarlo?\n- ¡Cualquier otra información importante también sería útil!\n\nEstamos aquí para ayudarte, así que no dudes en compartir todos los detalles posibles. 😊\n\nGracias,\nEl equipo de soporte",
                        color: Colors.Blurple,
                        footer: {
                            text: `Ticket créé par ${interaction.user.tag}`,
                            iconURL: interaction.user.displayAvatarURL({ dynamic: true })
                        }
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('_close') .setLabel('Fermer le ticket') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                })
            })
        }
        if (interaction.customId === "ticket_pt") {
            let ticket_es = interaction.guild.channels.create({
                name: `🎫-Ticket-de-${interaction.user.username}`,
                type: ChannelType.GuildText,
                parent: config.Category_pt,
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                        id: support_pt,
                        allow: ['VIEW_CHANNEL'],
                    }
                ],
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket de suporte",
                        description: "**Olá, e obrigado por abrir um ticket! 🎟️**\n\nPara nos ajudar a resolver seu problema ou responder à sua pergunta, você poderia nos fornecer mais detalhes?\n\n- Qual é a natureza do seu problema ou pergunta?\n- Se for um problema técnico, você já tentou algo para resolvê-lo?\n- Qualquer outra informação importante também seria útil!\n\nEstamos aqui para ajudar, então não hesite em compartilhar o máximo de detalhes possível. 😊\n\nObrigado,\nA equipe de suporte",
                        color: Colors.Blurple,
                        footer: {
                            text: `Ticket créé par ${interaction.user.tag}`,
                            iconURL: interaction.user.displayAvatarURL({ dynamic: true })
                        }
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('_close') .setLabel('Fermer le ticket') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                })
            })
        }
    }
}