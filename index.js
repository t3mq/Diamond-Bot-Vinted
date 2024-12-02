const { Client, Collection, GatewayIntentBits, Partials, ActivityType, ChannelType } = require("discord.js");
const colors = require("colors");

const client = new Client({
    intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildModeration, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ],
    partials: [ Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User ],
    restTimeOffset: 0,
    failIfNotExists: false,
    presence: {
        activities: [{
            name: `all sneakers`,
            type: ActivityType.Watching,
            url: "https://www.twitch.tv/zqx"
        }],
        status: "online"
    },
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false
    }
});

const config = require('./settings/config');
client.login(config.token);

module.exports = client;

client.slashCommands = new Collection();

client.on("ready", async () => {

    require('./handler')(client);

    const readyEvent = require('./events/client/ready');
    await readyEvent.execute(client);
});

process.on("unhandledRejection", (error) => {
    if (error.code == 10062) return; // Unknown interaction

    console.log(`[ERROR] ${error}`.red);
})


const requiredRoleIds = ['1313063692157587517', '1313063691339694110', '1313063690307899443']; 
const guildId = '1313063556152950794';
const checkInterval = 60000;

client.once('ready', async () => {
    console.log(`Bot connecté en tant que ${client.user.tag}!`);

    const guild = client.guilds.cache.get(guildId);
    
    if (!guild) {
        console.error("Erreur : impossible de trouver la guilde. Vérifie l'ID du serveur.");
        return;
    }

    // Vérifie que les rôles existent dans la guilde
    const validRoleIds = requiredRoleIds.filter(roleId => guild.roles.cache.has(roleId));
    if (validRoleIds.length === 0) {
        console.error("Erreur : aucun des rôles requis n'existe dans la guilde.");
        return;
    }

    // Vérifie régulièrement les membres
    setInterval(async () => {
        console.log("Vérification des membres...");

        try {
            await guild.members.fetch(); // Assure-toi que tous les membres sont chargés
            guild.members.cache.forEach(member => {
                // Vérifie si le membre a au moins un des rôles requis
                const hasRequiredRole = validRoleIds.some(roleId => member.roles.cache.has(roleId));

                if (!hasRequiredRole && !member.user.bot) {
                    member.kick('N\'a pas les rôles requis')
                        .then(() => console.log(`Le membre ${member.user.tag} a été expulsé.`))
                        .catch(err => console.error(`Erreur lors de l'expulsion de ${member.user.tag}:`, err));
                }
            });
        } catch (error) {
            console.error(`Erreur lors de la récupération des membres`, error);
        }

    }, checkInterval);
});