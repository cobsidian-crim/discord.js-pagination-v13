


# discord.js-pagination v13
An updated version of the [discord.js-pagination package created by saanuregh](https://github.com/saanuregh/discord.js-pagination) featuring proper discord.js@13.0.0 support!

# Installation
* `npm install discord.js-pagination-v13`

# Usage
__Basic Bot Example__
```js
// Import the discord.js-pagination package
const paginationEmbed = require('discord.js-pagination-v13');

// Use either MessageEmbed or RichEmbed to make pages
// Keep in mind that Embeds should't have their footers set since the pagination method sets page info there
const { MessageEmbed } = require('discord.js');
const embed1 = new MessageEmbed();

// Create an array of embeds
pages = [
	embed1,
	embed2,
	//....
	embedn
];

// Call the paginationEmbed method, first two arguments are required
// emojiList is the pageturners defaults to ['⏪', '⏩']
// timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
paginationEmbed(msg, pages, emojiList, timeout);
// There you go, now you have paged embeds
```
# Preview
![Demo](https://github.com/cobsidian-crim/discord.js-pagination-v13/blob/master/pagination%20test.png)
Here is a test using the updated package!
