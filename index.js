const paginationEmbed = async (msg, pages, emojiList = ['911757970197590036', '911757970415702076'], timeout = 120000) => {
	let emojiDone = 0;
	if (!msg && !msg.channel) throw new Error('Channel is inaccessible.');
	if (!pages) throw new Error('Pages are not given.');
	if (emojiList.length !== 2) throw new Error('Need two emojis.');
	let page = 0;
	const curPage = await msg.channel.send({ embeds: [pages[page].setFooter(`Page ${page + 1} / ${pages.length}`)] });
	for (const emoji of emojiList) await curPage.react(emoji).then(emojiDone ++)

	

	const reactionCollector = curPage.createReactionCollector(
		(reaction, user) => emojiList.includes(reaction.emoji.id),
		{ time: timeout }
	);
   
	reactionCollector.on('collect', (reaction, user) => {
		if(!user.bot){

		reaction.users.remove(msg.author);
		switch (reaction.emoji.id) {
			case emojiList[0]:
				page = page > 0 ? page -= 1 : pages.length - 1;
				break;
			case emojiList[1]:
				page = page + 1 < pages.length ? page += 1 : 0;
				break;
			default:
				break;
		}
		curPage.edit({ embeds: [pages[page].setFooter(`Page ${page + 1} / ${pages.length}`)] });
		}
	
	});
	reactionCollector.on('end', () => {
		if (!curPage.deleted) {
			curPage.reactions.removeAll()
		}
	});

	return curPage;

};
module.exports = paginationEmbed;
