const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'av',
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args 
    */
   run: async(client, message, args)  => {
       const member = message.mentions.users.first() || message.member;
       message.channel.send(
           new MessageEmbed()
           .setTitle(`${member.user.tag} profiel foto manbro`)
           .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
           .setColor('RANDOM')
       )

   }

}