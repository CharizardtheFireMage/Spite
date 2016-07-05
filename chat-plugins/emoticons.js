'use strict';

const color = require('../config/color');
let demFeels = function () {};
demFeels.getEmotes = function () {
	return {};
};
try {
	demFeels = require('dem-feels');
} catch (e) {
	console.error(e);
}

exports.parseEmoticons = parseEmoticons;

// for travis build
if (typeof demFeels.extendEmotes === 'function') {
	// example extending emotes
	demFeels.extendEmotes({
	"wandoge":"http://i.imgur.com/N940pnA.png",
	"feelswrm":"http://i.imgur.com/538WHXw.png",
	"datboi":"http://i.imgur.com/h0XMIKj.gif",
	"oshaswag":"http://orig08.deviantart.net/a30d/f/2015/010/5/8/oshawott_swag_by_whatiget4beinganerd-d82v3br.gif",
	"oshascared":"http://orig08.deviantart.net/a43c/f/2014/319/4/a/oshawott_oh_crap_plz_plz_by_whatiget4beinganerd-d86iqto.gif",
	"oshajig":"http://orig08.deviantart.net/8dc5/f/2014/278/9/9/gif_50x50_9b6b8b_by_tehcrzynintendogirl-d81q9go.gif",
	"oshablush":"http://orig03.deviantart.net/b3cb/f/2014/361/7/b/oshawott_surprised_happy_plz_by_whatiget4beinganerd-d8bi70h.gif",
	"oshahp":"http://orig00.deviantart.net/0774/f/2014/339/1/a/oshawott_happy_plz_by_whatiget4beinganerd-d88tfwi.gif",
	"oshayep":"http://orig13.deviantart.net/63e7/f/2014/287/b/0/oshawott_agrees_plz_by_whatiget4beinganerd-d82v0f0.gif",
	"oshalol":"http://orig13.deviantart.net/3110/f/2014/333/9/e/oshawott_spazzflail_plz_by_whatiget4beinganerd-d885fhr.gif",
	"oshacri":"http://orig00.deviantart.net/4753/f/2014/299/3/1/oshawott_cry_plz_by_whatiget4beinganerd-d84a2ea.gif",
	"arkenosha":"http://orig03.deviantart.net/9ab0/f/2011/023/b/a/oshawott_by_fakeshaman-d37u4wm.jpg",
	"oshasad":"http://orig12.deviantart.net/4fd7/f/2015/226/4/c/oh_no_oshawott_emote_by_tinystalker-d95o6jh.gif",
	"oshamad":"http://orig11.deviantart.net/e529/f/2013/232/2/1/watch_this_gif_swimming_pool__by_ash_oshawott-d6j0lfc.png",
	"oshakink":"http://orig03.deviantart.net/71a3/f/2015/331/e/1/oshawott_vector_by_soupcanz-d9i670b.png",
	"oshalove":"https://embed.gyazo.com/96e615f22858cce47d132911c759a6bb.png",
	"oshawink":"http://66.media.tumblr.com/1252a4a4d3a75cf6e85b72057c829080/tumblr_mmniwkKiT71qcl0fmo1_500.gif",
	"feelsmeta":"http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/11380957_409651562569143_38693199_n.jpg?ig_cache_key=MTAzMjI5NTc0MDcwNzY5MjE3Ng%3D%3D.2",
	"hitmonfeels":"http://farm1.static.flickr.com/610/21377476752_ede8dba27c_m.jpg",
	"feelsirn":"http://66.media.tumblr.com/934855d07b563a80d004710e074130a8/tumblr_noxudiSGVF1uwa0t9o1_400.png",
	"feelsbell":"http://67.media.tumblr.com/51cb4db0352b8b0685ab464f27b4a6e8/tumblr_ntow38YlQf1uba2j0o1_400.gif",
	"llamanv":"http://i.imgur.com/9PgUk4M.gif","feelsyui":"http://31.media.tumblr.com/3513753ebaf0e093668aef6d6ea365b6/tumblr_mx2arvTktx1r91cn2o2_500.gif",
	'4Head': 'https://static-cdn.jtvnw.net/emoticons/v1/354/1.0',
	'#freewolf': 'http://i.imgur.com/ybxWXiG.png',
	'(ditto)': 'https://cdn.betterttv.net/emote/554da1a289d53f2d12781907/2x',
	'BlueCatz': 'http://i.imgur.com/v7UdPzU.png',
	'Cate': 'http://i.imgur.com/728AQQN.jpg',
	'DansGame': 'https://static-cdn.jtvnw.net/emoticons/v1/33/1.0',
	'Doge': 'http://fc01.deviantart.net/fs71/f/2014/279/4/5/doge__by_honeybunny135-d81wk54.png',
	'EleGiggle': 'https://static-cdn.jtvnw.net/emoticons/v1/4339/2.0',
	'enteimixtape': 'http://i.imgur.com/Zz5B7At.png',
	'enteirawr': 'http://i.imgur.com/HZWoAMx.gif',
	'FacePalm': 'http://i.imgur.com/lv3GmpM.png',
	'FailFish': 'https://static-cdn.jtvnw.net/emoticons/v1/360/1.0',
	'feelsackbr': 'http://i.imgur.com/BzZJedC.jpg?1',
	'feelsamy': 'http://i.imgur.com/Aw8KAmi.gif',
	'feelsapple': 'http://i.imgur.com/h42wGYF.gif',
	'feelsarken': 'http://imgur.com/YCCDZWq.png',
	'feelsasl': 'http://i.imgur.com/ZQbYp9l.gif',
	'feelsbadHD': 'https://cdn.betterttv.net/emote/55b6e2e03293ee267743902b/2x',
	'feelsbald': 'http://i.imgur.com/Gv2BFxs.png',
	'feelsbd': 'http://i.imgur.com/YyEdmwX.png',
	'feelsbebop': 'http://i.imgur.com/TDwC3wL.png',
	'feelsbirb': 'http://i.imgur.com/o4KxmWe.png',
	'feelsbm': 'http://i.imgur.com/xwfJb2z.png',
	'feelsbn': 'http://i.imgur.com/wp51rIg.png',
	'feelsbt': 'http://i.imgur.com/rghiV9b.png',
	'feelsbunny': 'http://orig04.deviantart.net/a762/f/2012/352/9/5/dancing_bunny_by_onisuu-d5oee23.gif',
	'feelschar': 'http://orig04.deviantart.net/9abc/f/2013/118/8/e/charizard_lick_icon_by_spritegirl999-d63d7sf.gif',
	'feelschime': 'http://i.imgur.com/uIIBChH.png',
	'feelscool': 'http://i.imgur.com/qdGngVl.jpg?1',
	'feelscop': 'http://i.imgur.com/eNaFHvR.png?1',
	'feelscrazy': 'http://i.imgur.com/NiJsT5W.png',
	'feelscri': 'http://i.imgur.com/QAuUW7u.jpg?1',
	'feelscute': 'https://cdn.betterttv.net/emote/55aeba450d87fd2766bee7cd/2x',
	'feelscx': 'http://i.imgur.com/zRSUw2n.gif',
	'feelsdd': 'http://i.imgur.com/fXtdLtV.png',
	'feelsdell': 'http://i.imgur.com/1CgwuDz.jpg',
	'feelsdoge': 'http://i.imgur.com/GklYWvi.png',
	'feelsdrg': 'http://i.imgur.com/UZzWcA3.png',
	'feelsemo': 'http://i.imgur.com/FPolh5d.jpg',
	'feelsentei': 'http://i.imgur.com/Wxc10fM.jpg',
	'feelsevil': 'http://i.imgur.com/zOemc0n.png',
	'feelsfdra': 'http://i.imgur.com/ZIcl9Zy.jpg',
	'feelsfloat': 'http://i.imgur.com/XKP1Kpf.gif',
	'feelsfro': 'http://i.imgur.com/ijJakJT.png',
	'feelsgay': 'http://i.imgur.com/zQAacwu.png?1',
	'feelsgm': 'https://cdn.betterttv.net/emote/5638163f55dee26813aebbf1/2x',
	'feelsgn': 'http://i.imgur.com/juJQh0J.png',
	'feelsgro': 'http://i.imgur.com/jLhP0bZ.png?1',
	'feelshigh': 'http://i.imgur.com/s9I2bxp.jpg?1',
	'feelshlwn': 'http://i.imgur.com/OHMDVNJ.jpg',
	'feelsho': 'http://i.imgur.com/J4oUHm2.png?1',
	'feelshp': 'http://i.imgur.com/1W19BDG.png',
	'feelsilum': 'http://i.imgur.com/CnyGTTD.png',
	'feelsjig': 'http://i.imgur.com/hSzqy5z.png?1',
	'feelsjpn': 'http://i.imgur.com/Zz2WrQf.jpg',
	'feelskawaii': 'http://i.imgur.com/kLnDaYD.png',
	'feelsky': 'http://i.imgur.com/BtATPId.png?1',
	'feelslag': 'https://cdn.betterttv.net/emote/56758c29bf317838643c7e97/2x',
	'feelslelouch': 'http://i.imgur.com/qZrV75o.png',
	'feelsllama': 'http://i.imgur.com/oSLSk2I.gif',
	'feelslot': 'http://i.imgur.com/tl88F7i.png?1',
	'feelslug': 'http://i.imgur.com/REEBSOT.png?1',
	'feelslux': 'http://i.imgur.com/hDKCZMt.gif',
	'feelsmd': 'http://i.imgur.com/DJHMdSw.png',
	'feelsmerry': 'https://cdn.betterttv.net/emote/5658e10f18d1dbe358624e35/2x',
	'feelsmixtape': 'http://i.imgur.com/7lncwng.png',
	'feelsmmyea': 'https://cdn.betterttv.net/emote/562bf1bec6035e430db80824/2x',
	'feelsns': 'http://i.imgur.com/jYRFUYW.jpg?1',
	'feelsnv': 'http://i.imgur.com/XF6kIdJ.png',
	'feelsohwait': 'https://cdn.betterttv.net/emote/55ab96ce9406e5482db53424/2x',
	'feelsok': 'http://i.imgur.com/gu3Osve.png',
	'feelsorange': 'http://i.imgur.com/3fxXP16.jpg',
	'feelspanda': 'http://i.imgur.com/qi7fue9.png',
	'feelspaul': 'http://imgur.com/KuDZMJR.png',
	'feelsPika': 'http://i.imgur.com/eoTrTkn.png?1',
	'feelspika': 'http://i.imgur.com/mBq3BAW.png',
	'feelspink': 'http://i.imgur.com/jqfB8Di.png',
	'feelspix': 'http://cbc.pokecommunity.com/config/emoticons/pix.png',
	'feelsspl': 'http://i.imgur.com/RIOKSJ3.gif',
	'feelspn': 'http://i.imgur.com/wSSM6Zk.png',
	'feelspoli': 'http://i.imgur.com/FnzhrWa.jpg?1',
	'feelsPoli': 'http://i.imgur.com/sbKhXZE.jpg?1',
	'feelspuke': 'http://i.imgur.com/nQbRspU.png?1',
	'feelsrb': 'http://i.imgur.com/L6ak1Uk.png',
	'feelsreally': 'https://cdn.betterttv.net/emote/55b0fa13f54d6ecb7927ec54/2x',
	'feelsrekt': 'http://i.imgur.com/aNJyMr7.gif',
	'feelsrg': 'http://i.imgur.com/DsRQCsI.png',
	'feelsrs': 'http://i.imgur.com/qGEot0R.png',
	'feelssad': 'https://cdn.betterttv.net/emote/5613b7ca141069f91f48acca/2x',
	'feelssakis': 'http://i.imgur.com/yThm3fM.png?1',
	'feelssammich': 'http://i.imgur.com/sVgkUF1.png?1',
	'feelssaur': 'http://i.imgur.com/XABxFfF.jpg',
	'feelssc': 'http://i.imgur.com/cm6oTZ1.png',
	'feelsserp': 'http://i.imgur.com/PtCTxmY.png',
	'feelsseis': 'http://i.imgur.com/gGGYxrE.png?1',
	'feelsshi': 'http://i.imgur.com/VzlGZ1M.jpg',
	'feelsshrk': 'http://i.imgur.com/amTG3jF.jpg',
	'feelssht': 'http://i.imgur.com/s9owArF.png?1',
	'feelsslo': 'http://i.imgur.com/iQuToJf.jpg?1',
	'feelssnail': 'http://i.imgur.com/wf2ajCR.jpg',
	'feelssnake': 'http://i.imgur.com/xoJnDUD.png',
	'feelstea': 'http://i.imgur.com/M0f2zgJ.jpg?1',
	'feelstired': 'http://i.imgur.com/EgYViOs.jpg',
	'feelstrump': 'http://i.imgur.com/tqW8s6Y.png',
	'feelsvolc': 'http://i.imgur.com/QXlKzZd.png?1',
	'feelsvpn': 'http://i.imgur.com/ODTZISl.gif',
	'feelsweird': 'https://cdn.betterttv.net/emote/5603731ce5fc5eff1de93229/2x',
	'feelswin': 'http://i.imgur.com/rbs9pZG.png?1',
	'feelswndo': 'http://media.tumblr.com/68eb56721b0833c66c8a9542ed515594/tumblr_inline_mkj23fgNsZ1qz4rgp.gif',
	'feelsya': 'https://cdn.betterttv.net/emote/5678a310bf317838643c8188/2x',
	'funnylol': 'http://i.imgur.com/SlzCghq.png',
	'gachiGASM': 'https://cdn.betterttv.net/emote/55999813f0db38ef6c7c663e/2x',
	'gudone': 'http://i.imgur.com/USkp1b9.png',
	'gudsht': 'http://i.imgur.com/R9SO76u.png?1',
	'happyface': 'http://imgur.com/krzCL3j.jpg',
	'hmmface': 'http://i.imgur.com/Z5lOwfZ.png',
	'hoSway': 'https://cdn.betterttv.net/emote/56396c857e538de14bd747a5/2x',
	'hypnotoad': 'http://i.imgur.com/lJtbSfl.gif',
	'jcena': 'http://i.imgur.com/hPz30Ol.jpg?2',
	'Kappa': 'http://i.imgur.com/ZxRU4z3.png?1',
	'kappapride': 'http://i.imgur.com/GMs8OxU.jpg',
	'Kreygasm': 'https://static-cdn.jtvnw.net/emoticons/v1/41/1.0',
	'lelefp': 'http://i.imgur.com/pWlEKa3.jpg',
	'lelelol': 'http://i.imgur.com/R2g0RHT.gif',
	'lelewhat': 'http://i.imgur.com/capG93y.png',
	'Lennyf': 'http://i.imgur.com/FhOwY2P.png',
	'llamacool': 'http://i.imgur.com/X1x3728.gif',
	'llamanoodle': 'http://i.imgur.com/SUZkz5p.gif',
	'llamarawr': 'http://i.imgur.com/KWAQbPu.gif',
	'llamatea': 'http://i.imgur.com/nJnakEU.gif',
	'llamayawn': 'http://i.imgur.com/SVj8kBt.gif',
	'meGusta': 'http://cdn.overclock.net/3/36/50x50px-ZC-369517fd_me-gusta-me-gusta-s.png',
	'MingLee': 'https://static-cdn.jtvnw.net/emoticons/v1/68856/2.0',
	'noface': 'http://i.imgur.com/H744eRE.png',
	'Obama': 'http://i.imgur.com/rBA9M7A.png',
	'oshet': 'http://i.imgur.com/yr5DjuZ.png',
	'PeoplesChamp': 'http://i.imgur.com/QMiMBKe.png',
	'PogChamp': 'https://static-cdn.jtvnw.net/emoticons/v1/88/1.0',
	'RareChar': 'https://cdn.betterttv.net/emote/562b9101a6646e202bcc5447/2x',
	'Sanic': 'http://i.imgur.com/Y6etmna.png',
	'stevo': 'http://imgur.com/Gid6Zjy.png',
	'thumbsup': 'http://i.imgur.com/eWcFLLn.jpg',
	'trollface': 'http://cdn.overclock.net/a/a0/50x50px-ZC-a0e3f9a7_troll-troll-face.png',
	'trumpW': 'https://static-cdn.jtvnw.net/emoticons/v1/35218/1.0',
	'wtfman': 'http://i.imgur.com/kwR8Re9.png',
	'WutFace': 'https://static-cdn.jtvnw.net/emoticons/v1/28087/2.0',
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'Xaaentei': 'http://i.imgur.com/FgsNIPv.png',
	'xoxo': 'http://orig00.deviantart.net/b49d/f/2014/220/5/3/ichigo_not_impressed_icon_by_magical_icon-d7u92zg.png',
	'yayface': 'http://i.imgur.com/anY1jf8.png',
	'yesface': 'http://i.imgur.com/k9YCF6K.png',
	'youdontsay': 'http://r32.imgfast.net/users/3215/23/26/64/smiles/280467785.jpg',
	'bomaye': 'http://i.imgur.com/cuDGGJW.gif',
	'dedchat': 'http://i.imgur.com/W39kJHu.jpg',
	'disarmher': 'http://i.imgur.com/y0gYGSx.gif',
	'feelspac': 'http://i.imgur.com/Dc9DBUz.png',
	'feelskink': 'http://i.imgur.com/ubnzm6w.gif',
	'feelsok': 'http://i.imgur.com/gu3Osve.png',
	'feelspika': 'http://i.imgur.com/mBq3BAW.png',
	'feelspink': 'http://i.imgur.com/jqfB8Di.png',
	'feelspn': 'http://i.imgur.com/wSSM6Zk.png',
	'feelspr': 'http://i.imgur.com/3VtkKfJ.png',
	'feelsrg': 'http://i.imgur.com/DsRQCsI.png',
	'feelsrs': 'http://i.imgur.com/qGEot0R.png',
	'feelssc': 'http://i.imgur.com/cm6oTZ1.png',
	'feelstea': 'http://i.imgur.com/XQc8yZ2.gif',
	'Focus': 'http://i.imgur.com/dUN6xWl.gif',
	'noface': 'http://i.imgur.com/H744eRE.png',
	'welldone': 'http://i.imgur.com/DfKT8GL.gif',
	'Work': 'http://i.imgur.com/C6veCvt.gif',
	'yousee': 'http://i.imgur.com/fjFRa6m.gif',
	});
}

const emotes = demFeels.getEmotes();

const emotesKeys = Object.keys(emotes).sort();

/**
* Parse emoticons in message.
*
* @param {String} message
* @param {Object} room
* @param {Object} user
* @param {Boolean} pm - returns a string if it is in private messages
* @returns {Boolean|String}
*/
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	let match = false;
	let len = emotesKeys.length;

	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = demFeels(message);

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	let group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	let style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
* Create a two column table listing emoticons.
*
* @return {String} emotes table
*/
function create_table() {
	let emotes_name = Object.keys(emotes);
	let emotes_list = [];
	let emotes_group_list = [];
	let len = emotes_name.length;

	for (let i = 0; i < len; i++) {
		emotes_list.push("<td style='padding: 5px; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5) inset; border-radius: 5px;'>" + "<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' style='vertical-align: middle;  padding-right: 5px;' />" + emotes_name[i] + "</td>");
	}

	for (let i = 0; i < len; i += 4) {
		let emoteOutput = [emotes_list[i], emotes_list[i + 1], emotes_list[i + 2], emotes_list[i + 3]];
		if (i < len) emotes_group_list.push("<tr>" + emoteOutput.join('') + "</tr>");
	}

	return (
		"<div class='infobox'><center><font style='font-weight: bold; text-decoration: underline; color: #555;'>List of Emoticons</font></center>" +
		"<div style='max-height: 300px; overflow-y: scroll; padding: 5px 0px;'><table style='background: rgba(245, 245, 245, 0.4); border: 1px solid #BBB;' width='100%'>" +
		emotes_group_list.join("") +
		"</table></div></div>"
	);
}

let emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let rng = Math.floor(Math.random() * emotesKeys.length);
		let randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + "' height='50' width='50' />");
	},
	randemotehelp: ["/randemote - Get a random emote."],
};
