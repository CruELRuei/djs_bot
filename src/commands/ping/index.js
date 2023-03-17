import {SlashCommandBuilder} from 'discord.js'

export const commands = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping command')

export const action = async (ctx) => {
    await ctx.reply('pong!')
}
