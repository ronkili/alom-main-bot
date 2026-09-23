require("dotenv").config();

const {
  REST,
  Routes,
  SlashCommandBuilder,
  PermissionFlagsBits
} = require("discord.js");

const config = require("./config");

function durationOption(option) {
  return option
    .setName("duration")
    .setDescription("בחר לכמה זמן")
    .setRequired(true)
    .addChoices(
      { name: "10 שניות", value: "10s" },
      { name: "30 שניות", value: "30s" },
      { name: "דקה", value: "1m" },
      { name: "5 דקות", value: "5m" },
      { name: "10 דקות", value: "10m" },
      { name: "30 דקות", value: "30m" },
      { name: "שעה", value: "1h" },
      { name: "שעתיים", value: "2h" },
      { name: "6 שעות", value: "6h" },
      { name: "12 שעות", value: "12h" },
      { name: "יום", value: "1d" },
      { name: "3 ימים", value: "3d" },
      { name: "7 ימים", value: "7d" },
      { name: "14 ימים", value: "14d" },
      { name: "28 ימים", value: "28d" }
    );
}

function userReasonCommand(
  name,
  description,
  withDuration = false
) {
  const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)
    .addUserOption(option =>
      option
        .setName("user")
        .setDescription("המשתמש")
        .setRequired(true)
    );

  if (withDuration) {
    command.addStringOption(durationOption);
  }

  command.addStringOption(option =>
    option
      .setName("reason")
      .setDescription("סיבה")
      .setRequired(false)
  );

  return command;
}

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("בודק אם Alon Main Bot עובד"),


  new SlashCommandBuilder()
    .setName("setup-verify")
    .setDescription(
      "מגדיר Verify אוטומטי והרשאות Members לכל השרת"
    ),

  new SlashCommandBuilder()
    .setName("verify-panel")
    .setDescription("שולח את פאנל ה־Verify של Alon Main"),

  new SlashCommandBuilder()
    .setName("ticket-panel")
    .setDescription("שולח את מרכז התמיכה המתקדם של Alon Main"),

  new SlashCommandBuilder()
    .setName("staff-panel")
    .setDescription("שולח את פאנל הגיוס לצוות של Alon Main"),

  new SlashCommandBuilder()
    .setName("setup-xp-shop")
    .setDescription("שולח את פאנל ה-XP Shop של Alon Main"),


  userReasonCommand(
    "warn",
    "נותן Warn למשתמש"
  ),

  new SlashCommandBuilder()
    .setName("warnings")
    .setDescription("מציג Warns של משתמש")
    .addUserOption(option =>
      option
        .setName("user")
        .setDescription("המשתמש")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("unwarn")
    .setDescription("מסיר Warn לפי ID")
    .addUserOption(option =>
      option
        .setName("user")
        .setDescription("המשתמש")
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName("id")
        .setDescription("Warn ID, לדוגמה 357923456789012345")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("clear-warns")
    .setDescription("מוחק את כל ה-Warns של משתמש")
    .addUserOption(option =>
      option
        .setName("user")
        .setDescription("המשתמש")
        .setRequired(true)
    ),

  userReasonCommand(
    "mute",
    "נותן Voice Mute זמני",
    true
  ),

  userReasonCommand(
    "unvoice-mute",
    "מסיר Voice Mute"
  ),

  userReasonCommand(
    "chat-mute",
    "נותן Chat Mute זמני",
    true
  ),

  userReasonCommand(
    "un-chat-mute",
    "מסיר Chat Mute"
  ),

  userReasonCommand(
    "timeout",
    "נותן Timeout זמני",
    true
  ),

  userReasonCommand(
    "untimeout",
    "מסיר Timeout"
  ),

  userReasonCommand(
    "kick",
    "מעיף משתמש מהשרת"
  ),

  userReasonCommand(
    "ban",
    "נותן Ban למשתמש"
  ),

  new SlashCommandBuilder()
    .setName("clear")
    .setDescription("מוחק הודעות")
    .addIntegerOption(option =>
      option
        .setName("amount")
        .setDescription("כמות הודעות")
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
    )
].map(command => command.toJSON());

const rest = new REST({
  version: "10"
}).setToken(process.env.TOKEN);

async function deployCommands() {
  try {
    if (!process.env.TOKEN) {
      console.error("❌ TOKEN missing.");
      process.exit(1);
    }

    if (!config.clientId || !config.guildId) {
      console.error(
        "❌ clientId / guildId missing in config.js"
      );
      process.exit(1);
    }

    console.log(
      `🔄 Registering ${commands.length} Alon Main slash commands...`
    );

    const registered = await rest.put(
      Routes.applicationGuildCommands(
        config.clientId,
        config.guildId
      ),
      { body: commands }
    );

    console.log(
      `✅ Registered ${registered.length} commands`
    );

    console.log(
      registered
        .map(command => `✅ /${command.name}`)
        .join("\n")
    );
  } catch (error) {
    console.error("❌ Deploy error:", error);
    process.exit(1);
  }
}

deployCommands();
