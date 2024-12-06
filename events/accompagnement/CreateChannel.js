const { PermissionFlagsBits, Colors, ButtonStyle,ChannelType, ActionRowBuilder, ButtonBuilder, PermissionOverwrites } = require('discord.js');
const config = require('../../settings/config')
module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if (!interaction.isModalSubmit()) return;
        const prenom = interaction.fields.getTextInputValue('prenom')
        const age = interaction.fields.getTextInputValue('age')
        const budget = interaction.fields.getTextInputValue('budget')
        const experience = interaction.fields.getTextInputValue('exp')

        let AlrChannel = interaction.guild.channels.cache.find(c => c.topic === interaction.user.id);
        if (AlrChannel) return interaction.reply({
            content:  `Vous avez déjà un salon, veuillez vous y rendre !`,
            ephemeral: true
        })

        if (interaction.customId == "modal_even") {
            let channel = interaction.guild.channels.create({
                name: interaction.user.username,
                parent: config.EvenAccompagnement,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: `Accompagnement de ${interaction.user.username}`,
                        description: "Bonjour et bienvenue dans votre salon personnalisé, votre référent va venir vous prendre en charge le plus vite possible !",
                        fields: [
                            {
                                name: "✏ | Prénom :",
                                value: prenom,
                                inline: true
                            },
                            {
                                name: "📅 | Age :",
                                value: age,
                                inline: true
                            },
                            {
                                name: "💸 | Budget",
                                value: budget,
                                inline: true
                            },
                            {
                                name: "🔍 | Expérience :",
                                value: experience,
                                inline: true
                            }
                        ],
                        color: Colors.Blurple,
                        footer: {
                            text: "DIAMOND - Accompagnement"
                        }
                    }]
                })
                interaction.reply({
                    content: `Votre salon a bien été créé, vous pouvez désormais accéder à votre salon (<#${c.id}>) !`,
                    ephemeral: true
                })
                
            })
            
        }

        if (interaction.customId == "modal_gamix") {
            let channel = interaction.guild.channels.create({
                name: interaction.user.username,
                parent: config.GamixAccompagnement,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: `Accompagnement de ${interaction.user.username}`,
                        description: "Bonjour et bienvenue dans votre salon personnalisé, votre référent va venir vous prendre en charge le plus vite possible !",
                        fields: [
                            {
                                name: "✏ | Prénom :",
                                value: prenom,
                                inline: true
                            },
                            {
                                name: "📅 | Age :",
                                value: age,
                                inline: true
                            },
                            {
                                name: "💸 | Budget",
                                value: budget,
                                inline: true
                            },
                            {
                                name: "🔍 | Expérience :",
                                value: experience,
                                inline: true
                            }
                        ],
                        color: Colors.Blurple,
                        footer: {
                            text: "DIAMOND - Accompagnement"
                        }
                    }]
                })
                interaction.reply({
                    content: `Votre salon a bien été créé, vous pouvez désormais accéder à votre salon (<#${c.id}>) !`,
                    ephemeral: true
                })
                
            })
            
        }

        if (interaction.customId == "modal_p0dv") {
            let channel = interaction.guild.channels.create({
                name: interaction.user.username,
                parent: config.P0dvAccompagnement,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: `Accompagnement de ${interaction.user.username}`,
                        description: "Bonjour et bienvenue dans votre salon personnalisé, votre référent va venir vous prendre en charge le plus vite possible !",
                        fields: [
                            {
                                name: "✏ | Prénom :",
                                value: prenom,
                                inline: true
                            },
                            {
                                name: "📅 | Age :",
                                value: age,
                                inline: true
                            },
                            {
                                name: "💸 | Budget",
                                value: budget,
                                inline: true
                            },
                            {
                                name: "🔍 | Expérience :",
                                value: experience,
                                inline: true
                            }
                        ],
                        color: Colors.Blurple,
                        footer: {
                            text: "DIAMOND - Accompagnement"
                        }
                    }]
                })
                interaction.reply({
                    content: `Votre salon a bien été créé, vous pouvez désormais accéder à votre salon (<#${c.id}>) !`,
                    ephemeral: true
                })
                
            })
            
        }

        if (interaction.customId == "modal_waiko") {
            let channel = interaction.guild.channels.create({
                name: interaction.user.username,
                parent: config.WaikoAccompagnement,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: `Accompagnement de ${interaction.user.username}`,
                        description: "Bonjour et bienvenue dans votre salon personnalisé, votre référent va venir vous prendre en charge le plus vite possible !",
                        fields: [
                            {
                                name: "✏ | Prénom :",
                                value: prenom,
                                inline: true
                            },
                            {
                                name: "📅 | Age :",
                                value: age,
                                inline: true
                            },
                            {
                                name: "💸 | Budget",
                                value: budget,
                                inline: true
                            },
                            {
                                name: "🔍 | Expérience :",
                                value: experience,
                                inline: true
                            }
                        ],
                        color: Colors.Blurple,
                        footer: {
                            text: "DIAMOND - Accompagnement"
                        }
                    }]
                })
                interaction.reply({
                    content: `Votre salon a bien été créé, vous pouvez désormais accéder à votre salon (<#${c.id}>) !`,
                    ephemeral: true
                })
                
            })
            
        }

        if (interaction.customId == "modal_math") {
            let channel = interaction.guild.channels.create({
                name: interaction.user.username,
                parent: config.MathAccompagnement,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: `Accompagnement de ${interaction.user.username}`,
                        description: "Bonjour et bienvenue dans votre salon personnalisé, votre référent va venir vous prendre en charge le plus vite possible !",
                        fields: [
                            {
                                name: "✏ | Prénom :",
                                value: prenom,
                                inline: true
                            },
                            {
                                name: "📅 | Age :",
                                value: age,
                                inline: true
                            },
                            {
                                name: "💸 | Budget",
                                value: budget,
                                inline: true
                            },
                            {
                                name: "🔍 | Expérience :",
                                value: experience,
                                inline: true
                            }
                        ],
                        color: Colors.Blurple,
                        footer: {
                            text: "DIAMOND - Accompagnement"
                        }
                    }]
                })
                interaction.reply({
                    content: `Votre salon a bien été créé, vous pouvez désormais accéder à votre salon (<#${c.id}>) !`,
                    ephemeral: true
                })
                
            })
            
        }
    }
}