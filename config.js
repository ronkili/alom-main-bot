module.exports = {
  // =====================
  // ALON MAIN BOT
  // =====================

  clientId: "1552256395712143420",
  guildId: "1552239758464393246",

  // =====================
  // VERIFY
  // =====================

  // הרול שמקבלים אחרי Verify
  memberRoleId: "1552240845305024573",

  // אופציונלי: IDs של חדרים שצריכים להיות קריאה בלבד ל־Members.
  // בנוסף, הבוט מזהה אוטומטית שמות כמו:
  // updates / announcements / news / rules / עדכונים / חוקים
  verifyReadOnlyChannelIds: [
  "1552250283843915828",
  "1552247120122216548",
  "1552249838001856522",
  "15522406808172986429",
  "1552241917302013972",
  "1552243027987275786",
  "1552243078973104128"
    "1552258436526247978"
"1552258486564556801"
"1552258615421960215"
],

  // =====================
  // STAFF
  // =====================

  // Staff role used by:
  // !rank, !h claims, moderation and ticket controls.
  staffRoleId: "1552259334078074932",

  // =====================
  // MODERATION
  // =====================

  // Role used for Chat Mute.
  muteRoleId: "1552259390936190996",

  // Moderation logs channel.
  // Leave "" if you do not want mod logs.
  modLogsChannelId: "1552259532539830323",

  // =====================
  // TICKETS
  // =====================

  // Category where tickets are created.
  ticketCategoryId: "1552242972119277628",

  // Staff role for normal tickets.
  ticketStaffRoleId: "1552259334078074932",

  // Separate role for Staff Application tickets.
  staffTestTicketRoleId: "1552259662903115896",

  // Ticket close logs + transcripts.
  ticketLogsChannelId: "1552259782533054504",

  // =====================
  // WELCOME
  // =====================

  // Optional fixed welcome channel.
  // Leave "" and the bot will try:
  // welcome / welcomes / ברוכים-הבאים
  // then the server System Channel.
  welcomeChannelId: "1552240808172986429",

  // =====================
  // XP
  // =====================

  xpPrefix: "!",

  xpPerMessageMin: 5,
  xpPerMessageMax: 15,

  xpMessageCooldownMs:
    60 * 1000,

  dailyXpMin: 250,
  dailyXpMax: 500,

  rankXpPerLevel: 500,

  // =====================
  // VIRTUAL XP ARCADE
  // No real money / no purchases / no cashout.
  // =====================

  maxCasinoBet: 1000,

  casinoCooldownMs:
    5 * 1000,

  // =====================
  // XP SHOP
  // =====================

  xpShop: [
    {
      key: "supporter",
      name: "Alon Main Supporter",
      emoji: "💙",
      price: 2500,
      roleId:
        "1552260029418307585"
    },
    {
      key: "elite",
      name: "Alon Main Elite",
      emoji: "💎",
      price: 5000,
      roleId:
        "1552260177896407040"
    },
    {
      key: "legend",
      name: "Alon Main Legend",
      emoji: "👑",
      price: 10000,
      roleId:
        "1552260304686162031"
    }
  ]
};
