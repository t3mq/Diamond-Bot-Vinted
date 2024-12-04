const config = require('../../settings/config');

module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if (!interaction.isButton()) return;

        const member = interaction.member;

        if (interaction.customId === "french") {
            const role = interaction.guild.roles.cache.get(config.Fr);

            if (!role) {
                return interaction.reply({ 
                    content: "Le rôle français n'existe pas.", 
                    ephemeral: true 
                });
            }

            try {
                if (member.roles.cache.has(role.id)) {
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Rôle retiré avec succès !", ephemeral: true });
                } else {
                    await member.roles.add(role);
                    await interaction.reply({ content: "Rôle ajouté avec succès !", ephemeral: true });

                    let france_channel = interaction.guild.channels.cache.get(config.FrChat);
                    france_channel.send({
                        content: `Bienvenue ${interaction.user} parmi nous !`
                    });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Une erreur s\'est produite lors de la gestion du rôle.', 
                    ephemeral: true 
                });
            }
        }
        if (interaction.customId === "spanish") {
            const role = interaction.guild.roles.cache.get(config.Es);

            if (!role) {
                return interaction.reply({ 
                    content: "El papel de España no existe.", 
                    ephemeral: true 
                });
            }
            try {
                if (member.roles.cache.has(role.id)) {
                    await member.roles.remove(role);
                    await interaction.reply({ content: "¡Rol retirado con éxito!", ephemeral: true });
                } else {
                    await member.roles.add(role);
                    await interaction.reply({ content: "Función añadida correctamente", ephemeral: true });

                    let spanish_channel = interaction.guild.channels.cache.get(config.EsChat);
                    spanish_channel.send({
                        content: `Bienvenido ${interaction.user} entre nosotros`});
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Se ha producido un error al gestionar el rol.', 
                    ephemeral: true 
                });
            }
        }
        if (interaction.customId === "portuguese") {
            const role = interaction.guild.roles.cache.get(config.Pt);
        
            if (!role) {
                return interaction.reply({ 
                    content: "O jornal português não existe.", 
                    ephemeral: true 
                });
            }
            try {
                if (member.roles.cache.has(role.id)) {
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Função retirada com sucesso!", ephemeral: true });
                } else {
                    await member.roles.add(role);
                    await interaction.reply({ content: "Função adicionada com sucesso", ephemeral: true });

                    let portuges_channel = interaction.guild.channels.cache.get(config.PtChat);
                    portuges_channel.send({
                        content: `bem-vindo ${interaction.user} entre nós`
                    })
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Ocorreu um erro ao gerir a função.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "annonce_fr") {
            const role = interaction.guild.roles.cache.get(config.Annonce);

            if (!role) {
                return interaction.reply({ 
                    content: "Le rôle anonnce n'existe pas.", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Rôle retiré avec succès !", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "Rôle ajouté avec succès !", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Une erreur s\'est produite lors de la gestion du rôle.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "evenement_fr") {
            const role = interaction.guild.roles.cache.get(config.Event);

            if (!role) {
                return interaction.reply({ 
                    content: "Le rôle evenement n'existe pas.", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Rôle retiré avec succès !", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "Rôle ajouté avec succès !", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Une erreur s\'est produite lors de la gestion du rôle.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "conseil_fr") {
            const role = interaction.guild.roles.cache.get(config.Call);

            if (!role) {
                return interaction.reply({ 
                    content: "Le rôle conseil n'existe pas.", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Rôle retiré avec succès !", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "Rôle ajouté avec succès !", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Une erreur s\'est produite lors de la gestion du rôle.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "annonce_es") {
            const role = interaction.guild.roles.cache.get(config.Annonce);

            if (!role) {
                return interaction.reply({ 
                    content: "A função de anonimato não existe.", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "¡Función eliminada con éxito!", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "¡Función añadida correctamente!", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Se ha producido un error al gestionar la función.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "evenement_es") {
            const role = interaction.guild.roles.cache.get(config.Event);

            if (!role) {
                return interaction.reply({ 
                    content: "La función de evento no existe.", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "¡Función eliminada con éxito!", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "¡Función añadida correctamente!", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Se ha producido un error al gestionar la función.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "conseil_es") {
            const role = interaction.guild.roles.cache.get(config.Call);

            if (!role) {
                return interaction.reply({ 
                    content: "A função de aconselhamento não existe.", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Função retirada com sucesso!", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "Função adicionada com sucesso!", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Ocorreu um erro ao gerir a função.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "annonce_pt") {
            const role = interaction.guild.roles.cache.get(config.Annonce);

            if (!role) {
                return interaction.reply({ 
                    content: "O anúncio da função não existe", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Função retirada com sucesso!", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "Função adicionada com sucesso!", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Ocorreu um erro ao gerir a função.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "evenement_pt") {
            const role = interaction.guild.roles.cache.get(config.Event);

            if (!role) {
                return interaction.reply({ 
                    content: "a função do evento não existe", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Função retirada com sucesso!", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "Função adicionada com sucesso!", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Ocorreu um erro ao gerir a função.', 
                    ephemeral: true 
                });
            }
        }

        if (interaction.customId === "conseil_pt") {
            const role = interaction.guild.roles.cache.get(config.Call);

            if (!role) {
                return interaction.reply({ 
                    content: "a função consultiva não existe", 
                    ephemeral: true 
                });
            }
            
            // Vérifie si le membre a déjà le rôle
            try {
                if (member.roles.cache.has(role.id)) {
                    // Si le membre a le rôle, on le retire
                    await member.roles.remove(role);
                    await interaction.reply({ content: "Função retirada com sucesso!", ephemeral: true });
                } else {
                    // Si le membre n'a pas le rôle, on l'ajoute
                    await member.roles.add(role);
                    await interaction.reply({ content: "Função adicionada com sucesso!", ephemeral: true });
                }
            } catch (error) {
                console.error('Erreur lors de la gestion du rôle :', error);
                await interaction.reply({ 
                    content: 'Ocorreu um erro ao gerir a função.', 
                    ephemeral: true 
                });
            }
        }
    }
};
