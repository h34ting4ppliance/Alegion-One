const { MessageEmbed } = require('discord.js')

module.exports = async (client, message) => {
    const mcServerListEmbed = new MessageEmbed()
        .setTitle('Minecraft Server List')
        .setColor('RANDOM')
        .setDescription('Some of the most popular server\'s out there!')
        .addField('**Hypixel**', '**mc.hypixel.net**')
        .addField('MineSuperior', 'hub.mcs.gg')
        .addField('InvadedLands', 'play.invadedlands.net')
        .addField('CubeCraft Games', 'play.cubecraft.net')
        .addField('Complex Gaming', 'hub.mc-complex.com')
        .addField('Datblock', 'Play.datblock.com')
        .addField('TheArchon', 'org.archonhq.net')
        .addField('ManaCube', 'join.manacube.net')
        .addField('PocketPixels', 'play.pocketpixels.net')
        .addField('PvPWars', 'pvpwars.net')
        .addField('Applecraft', 'play.applecraft.org')
        .addField('EarthMC', 'play.EarthMC.net')
        .addField('Vortex', 'mc.vortexpvp.gg')
        .addField('Minecraft Central', 'mccentral.org')
        .addField('ExtremeCraft.Net', 'play.extremecraft.net')
        .addField('LemonCloud', 'one.lemoncloud.net')
        .setFooter('2020 MC Servers')

    return message.channel.send(mcServerListEmbed)
}