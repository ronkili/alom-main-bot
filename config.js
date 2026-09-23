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
    verifyReadOnlyChannelIds: [
  "1552250283843915828",
  "1552247120122216548",
  "1552249838001856522",
  "15522406808172986429",
  "1552241917302013972",
  "1552243027987275786",
  "1552243078973104128"
],
  ],

  // =====================
  // STAFF
  // =====================

  // Staff role used by:
  // !rank, !h claims, moderation and ticket controls.
  staffRoleId: "PUT_STAFF_ROLE_ID_HERE",

  // =====================
  // MODERATION
  // =====================

  // Role used for Chat Mute.
  muteRoleId: "PUT_MUTE_ROLE_ID_HERE",

  // Moderation logs channel.
  // Leave "" if you do not want mod logs.
  modLogsChannelId: "PUT_MOD_LOGS_CHANNEL_ID_HERE",

  // =====================
  // TICKETS
  // =====================

  // Category where tickets are created.
  ticketCategoryId: "PUT_TICKET_CATEGORY_ID_HERE",

  // Staff role for normal tickets.
  ticketStaffRoleId: "PUT_TICKET_STAFF_ROLE_ID_HERE",

  // Separate role for Staff Application tickets.
  staffTestTicketRoleId: "PUT_STAFF_TEST_ROLE_ID_HERE",

  // Ticket close logs + transcripts.
  ticketLogsChannelId: "PUT_TICKET_LOGS_CHANNEL_ID_HERE",

  // =====================
  // WELCOME
  // =====================

  // Optional fixed welcome channel.
  // Leave "" and the bot will try:
  // welcome / welcomes / ברוכים-הבאים
  // then the server System Channel.
  welcomeChannelId: "",

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
        "PUT_SUPPORTER_ROLE_ID_HERE"
    },
    {
      key: "elite",
      name: "Alon Main Elite",
      emoji: "💎",
      price: 5000,
      roleId:
        "PUT_ELITE_ROLE_ID_HERE"
    },
    {
      key: "legend",
      name: "Alon Main Legend",
      emoji: "👑",
      price: 10000,
      roleId:
        "PUT_LEGEND_ROLE_ID_HERE"
    }
  ]
};
