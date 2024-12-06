const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const config = require('../../settings/config')
module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.values[0] == "even") {
            const modal = new ModalBuilder()
                .setCustomId('modal_even')
                .setTitle('Fiche de renseignement')
            
            const prenom = new TextInputBuilder()
                .setCustomId('prenom')
                .setLabel('Prenom')
                .setStyle(TextInputStyle.Short)
                
            const age = new TextInputBuilder()
                .setCustomId('age')
                .setLabel('Quel est votre age ?')
                .setStyle(TextInputStyle.Short)

            const budget = new TextInputBuilder()
                .setCustomId('budget')
                .setLabel('Quel est votre budget ?')
                .setStyle(TextInputStyle.Short)

            const experience = new TextInputBuilder()
                .setCustomId('exp')
                .setLabel('Avez-vous de l\'expérience ?')
                .setStyle(TextInputStyle.Short)

            const firstAction = new ActionRowBuilder() .addComponents(prenom)
            const secondAction = new ActionRowBuilder() .addComponents(age)
            const thirdAction = new ActionRowBuilder() .addComponents(budget)
            const fourAction = new ActionRowBuilder() .addComponents(experience)

            modal.addComponents(firstAction, secondAction, thirdAction, fourAction)
            await interaction.showModal(modal)
        }

        if (interaction.values[0] == "gamix") {
            const modal = new ModalBuilder()
                .setCustomId('modal_gamix')
                .setTitle('Fiche de renseignement')
            
                const prenom = new TextInputBuilder()
                .setCustomId('prenom')
                .setLabel('Prenom')
                .setStyle(TextInputStyle.Short)
                
            const age = new TextInputBuilder()
                .setCustomId('age')
                .setLabel('Quel est votre age ?')
                .setStyle(TextInputStyle.Short)

            const budget = new TextInputBuilder()
                .setCustomId('budget')
                .setLabel('Quel est votre budget ?')
                .setStyle(TextInputStyle.Short)

            const experience = new TextInputBuilder()
                .setCustomId('exp')
                .setLabel('Avez-vous de l\'expérience ?')
                .setStyle(TextInputStyle.Short)

            const firstAction = new ActionRowBuilder() .addComponents(prenom)
            const secondAction = new ActionRowBuilder() .addComponents(age)
            const thirdAction = new ActionRowBuilder() .addComponents(budget)
            const fourAction = new ActionRowBuilder() .addComponents(experience)

            modal.addComponents(firstAction, secondAction, thirdAction, fourAction)
            await interaction.showModal(modal)
        }

        if (interaction.values[0] == "p0dv") {
            const modal = new ModalBuilder()
                .setCustomId('modal_p0dv')
                .setTitle('Fiche de renseignement')
            
                const prenom = new TextInputBuilder()
                .setCustomId('prenom')
                .setLabel('Prenom')
                .setStyle(TextInputStyle.Short)
                
            const age = new TextInputBuilder()
                .setCustomId('age')
                .setLabel('Quel est votre age ?')
                .setStyle(TextInputStyle.Short)

            const budget = new TextInputBuilder()
                .setCustomId('budget')
                .setLabel('Quel est votre budget ?')
                .setStyle(TextInputStyle.Short)

            const experience = new TextInputBuilder()
                .setCustomId('exp')
                .setLabel('Avez-vous de l\'expérience ?')
                .setStyle(TextInputStyle.Short)

            const firstAction = new ActionRowBuilder() .addComponents(prenom)
            const secondAction = new ActionRowBuilder() .addComponents(age)
            const thirdAction = new ActionRowBuilder() .addComponents(budget)
            const fourAction = new ActionRowBuilder() .addComponents(experience)

            modal.addComponents(firstAction, secondAction, thirdAction, fourAction)
            await interaction.showModal(modal)
        }

        if (interaction.values[0] == "waiko") {
            const modal = new ModalBuilder()
                .setCustomId('modal_waiko')
                .setTitle('Fiche de renseignement')
            
                const prenom = new TextInputBuilder()
                .setCustomId('prenom')
                .setLabel('Prenom')
                .setStyle(TextInputStyle.Short)
                
            const age = new TextInputBuilder()
                .setCustomId('age')
                .setLabel('Quel est votre age ?')
                .setStyle(TextInputStyle.Short)

            const budget = new TextInputBuilder()
                .setCustomId('budget')
                .setLabel('Quel est votre budget ?')
                .setStyle(TextInputStyle.Short)

            const experience = new TextInputBuilder()
                .setCustomId('exp')
                .setLabel('Avez-vous de l\'expérience ?')
                .setStyle(TextInputStyle.Short)

            const firstAction = new ActionRowBuilder() .addComponents(prenom)
            const secondAction = new ActionRowBuilder() .addComponents(age)
            const thirdAction = new ActionRowBuilder() .addComponents(budget)
            const fourAction = new ActionRowBuilder() .addComponents(experience)

            modal.addComponents(firstAction, secondAction, thirdAction, fourAction)
            await interaction.showModal(modal)
        }

        if (interaction.values[0] == "math") {
            const modal = new ModalBuilder()
                .setCustomId('modal_math')
                .setTitle('Fiche de renseignement')
            
            const prenom = new TextInputBuilder()
                .setCustomId('prenom')
                .setLabel('Prenom')
                .setStyle(TextInputStyle.Short)
                
            const age = new TextInputBuilder()
                .setCustomId('age')
                .setLabel('Quel est votre age ?')
                .setStyle(TextInputStyle.Short)

            const budget = new TextInputBuilder()
                .setCustomId('budget')
                .setLabel('Quel est votre budget ?')
                .setStyle(TextInputStyle.Short)

            const experience = new TextInputBuilder()
                .setCustomId('exp')
                .setLabel('Avez-vous de l\'expérience ?')
                .setStyle(TextInputStyle.Short)

            const firstAction = new ActionRowBuilder() .addComponents(prenom)
            const secondAction = new ActionRowBuilder() .addComponents(age)
            const thirdAction = new ActionRowBuilder() .addComponents(budget)
            const fourAction = new ActionRowBuilder() .addComponents(experience)

            modal.addComponents(firstAction, secondAction, thirdAction, fourAction)
            await interaction.showModal(modal)
        }
    }
}