//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "tylortechtrends@gmail.com";
global.location = "Nairobi, Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/ItsFutureTrends/Godzilla-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaaxfYH2ER6oOMkqFS3W";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaaxfYH2ER6oOMkqFS3W";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71c8e0d16cee3425e0ee5.jpg";
global.devs = "254787371970,2347066575685";
global.sudo = process.env.SUDO || "254754783972";
global.owner = process.env.OWNER_NUMBER || "254787371970,2347066575685";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/71c8e0d16cee3425e0ee5.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "254787371970,254754783972,2347066575685";
global.read_status_from = process.env.READ_STATUS_FROM || "254787371970,254754783972,2347066575685";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀 𝐁𝐎𝐓",
  author: process.env.PACK_AUTHER || "𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀",
  packname: process.env.PACK_NAME || "𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀♥️",
  botname: process.env.BOT_NAME || "𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀_𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐅𝐮𝐭𝐮𝐫𝐞𝐓𝐫𝐞𝐧𝐝𝐬",
  errorChat: process.env.ERROR_CHAT || "254787371970",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GODZILLA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
