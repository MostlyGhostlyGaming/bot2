const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*';

client.once('ready', () => {
    console.log('GPN Bot is online!');
    client.user.setActivity('Official GPN Halloween Contest');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
    else if(command == 'gpnmc'){
        message.channel.send('• Join Our Minecraft Server today! in version 1.16.1  Server: GPN Network IP: gpnnetwork.my.pebble.host');
    }
    else if(command == 'xmasgiveback'){
        message.channel.send('GPN gives back on December 20th to their loyal fans $300 worth of goodies. Please stay tuned for this event.');
    }
    else if(command == 'halloween'){
        message.channel.send('here is a basic intro to the comp. : Since Halloween may be cancelled this year I thought of a nice way to give back to our fans. I will be giving 3 of these away which you will have a chance to participate in. The incentive is to bring people to our community so your friends can also participate. This will be given away 1 week before Halloween. Make sure you let your friends know about us and get them to join because we do contests all year around this is just one of the many we do. ONLY enter if you are allowed to participate or have a PO Box who wouldn\'t love to have 340 pieces of gum to munch on while doing school work lol winners will be drawn using wheel of names and will be recorded.');
    }
    else if(command == 'enter'){
        message.reply('You Have Been Entered Into The Contest!');
    }
});

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'helpCommands':
            const embed = new Discord.MessageEmbed()
            .setTitle('Bot Commands')
            .addField('Commands', 'ping | gpnmc | xmasgiveback | halloween | helpCommands | help | helpMinecraft | PlayerInfo | GPNHelp | GPNOwner? |')
            .addField('Other Info', 'This information above might not always be 100% accurate. This bot is really new and is still in development.')
            .setColor('#09FF00')

            message.channel.send(embed);
        break;


    }
})

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'suggestions':
            const embed = new Discord.MessageEmbed()
            .setTitle('info')
            .addField('Commands', 'In This Channel You Can Suggest Bot Commands For The GPN Bot')
            .addField('Other Info', 'The Accepter Is [GPN Founder] Mr GP. ')
            .addField('Rules', 'Do Not Poat The Same Recommendation Nore Than Once | Do Not Have Conversations In This Channel | DO NOT RECOMMEND ANYTHING THAT IS NSFW | Do Not Spam')
            .addField('Voting System', 'If You Want To See A certain Command Be Added, Give It A Thumbs up. The More Thumbs Up A Recomendation Has, The More Likely It Will Be added')
            .setColor('#09FF00')

            message.channel.send(embed);
        break;


    }
})

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'People':
            const embed = new Discord.MessageEmbed()
            .setTitle('Contest people')
            .addField('People', 'The Current Contestants Are Ro Nation, Syntheziz, Ghostly, Adiyn, Exile, Murchees, JoJo, Oveo, King, Dominator555')
            .addField('Other Info', '| This list will be updated when a new person enters the contest | note it may take a few minutes for the list to update')
            .setColor('#09FF00')

            message.channel.send(embed);
        break;


    }
})

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'help':
            const embed = new Discord.MessageEmbed()
            .setTitle('GPN Bot Commands')
            .addField('Commands', 'For Help For Commands Do *helpCommands') 
            .addField('Minecraft', 'for help with Minecraft type *helpMinecraft')
            .addField('Halloween', 'to see details about the halloween contest do *halloween')
            message.channel.send(embed);
        break;


    }
})

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'helpMinecraft':
            const embed = new Discord.MessageEmbed()
            .setTitle('Minecraft Help')
            .addField('Minecraft Server', 'IP: gpnnetwork.my.pebble.host')
            .addField('Extra Information', 'Survival Server, Runs on 1.16.1. has Mini Games - TNT Run, Bedwars & Hunger Games. Family Friendly and for All Ages')
            message.channel.send(embed);
        break;
        
    }
})

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'PlayerInfo':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Info')
            .addField('Player Name', message.author.username)
            .addField('Version', '1.13.0')
            .addField('Current Server', message.guild.name)
            .setColor('#00FFF2')
            
            message.channel.send(embed);
        break;


    }
})

client.on('message', message =>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'GPNHelp':
            const embed = new Discord.MessageEmbed()
            .setTitle('What Is GPN?')
            .addField('Quick Explanation', 'GPN is a Community Network that helps smaller YouTubers.')
            .addField('Full Description', 'Welcome to Gaming Players National Network. We are a Community Network that was established on April 1 2020 on a Discord server that grew our numbers from 8 members to close to 100 in a duration of 4 months. The Network provides our members with Community coaching skills to helping their YouTube channels and also giving our crew a place to chill and have fun. The Network also has it\'s own Minecraft Server on 1.16.1 which you can join in and play with other fans and staff worldwide which runs 24 hours 7 days a week. The Ip can be found on our Bio. If you have any questions or feedback it can be directed to our business email | GPNBusiness@yahoo.com')

            message.channel.send(embed);
        break;


    }
})

client.on('message', message =>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'GPNOwner?':
            const embed = new Discord.MessageEmbed()
            .setTitle('The Owners Of GPN Are:')
            .addField('GPN Network', 'https://www.youtube.com/c/GamingPlayersNationalNetwork/featured')
            .addField('LagonGaming', 'https://www.youtube.com/channel/UCFFX-Zep8DQHf040zASCVYw')
            .addField('TheKingOfGames', 'https://www.youtube.com/user/eddiedavidson2009')
            .addField('Exile Visionz', 'https://www.youtube.com/channel/UCh8xPypoBPOrDJfch56Lcww')
            .addField('Co-Owners', 'These Are The Co-Owners Of GPN')
            .addField('Nekoless', 'https://www.youtube.com/channel/UCHmKwku4S4OYeAmjAsGRiXA')
            .addField('Mostly Ghostly - Gaming', 'https://www.youtube.com/channel/UC86E0GqryxO41XnWJiqMD5A')
            .setColor('#00FFF2')

            message.author.send(embed);
        break;


    }
})


client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch (args[0]) {
        case 'kick':
            if(!args[1]) message.channel.send('you need to specify a person!')

            const user = message.mentions.users.first();

            if(user){
                const member =  message.guild.member(user);
                if(member){
                    member.kick('You were kicked').then(() =>{
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err =>{
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else{
                    message.reply("That user isn\'t in the thid guild")
                } 
            } else {
                message.reply('that user isn\'t in the guild')
            }
            
        break;
    }

    switch (args[0]) {
        case 'ban':
            if(!args[1]) message.channel.send('you need to specify a person!')

            const user = message.mentions.users.first();

            if(user){
                const member =  message.guild.member(user);
                if(member){
                   member.ban({ression: 'You Were Banned'}).then(() =>{
                       message.reply(`Sucsessfuly Banned ${user.tag}`)
                   })
                } else{
                    message.reply("That user isn\'t in the thid guild")
                } 
            } else {
                message.reply('that user isn\'t in the guild')
            }
            
        break;
    }
})

client.login(process.env.BOT_TOKEN)
