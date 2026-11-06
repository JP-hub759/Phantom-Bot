require("dotenv").config();
const identity = require("./lib/identity");

// Sanitize env variables (strip non-printable/non-ASCII characters)
const cleanEnv = (key) => (process.env[key] || "").replace(/[^\x20-\x7E]/g, "").trim();

const config = {
  BOT_NAME: identity.BOT_NAME,
  BOT_VERSION: identity.BOT_VERSION,
  OWNER_NUMBER: cleanEnv("OWNER_NUMBER") || identity.OWNER_NUMBER,
  CHANNEL_LINK: identity.CHANNEL_LINK,
  MENU_IMAGE_URL: identity.MENU_IMAGE_URL,

  PREFIX: process.env.PREFIX || "!",
  SESSION_ID: cleanEnv("SESSION_ID"),phantom-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpXM1pPNEZ6UTNQSU5sc1FuVVlWZ3NxK3g4YThxSTZMcUlGc1dEK09Hcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWlnQ3lmeWNLa3BEOENhL1JycjB4WmVIU25xM29pN3dBcjg5QlBqTmYyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T2ZkMDVBU0pKYXc0RXNtRnZjV2VUVjFkUlFOUlRmS1VvOFd6SFltTTMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZUFsbUY4ZHJOZ0ZUbFFZcEczeU80V0lQck5LUS9EbjZabGNoUUUvK3p3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIeHpENnByd0F5N2xmQnFsZzZPampKb1IzcTNHYVVFOTF0Q3pPNDY3M1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild2bzlZN1NSUVdzT0E2Zmg0ckNnZmNCNFFHU1VRbTIwQ29IVTNLL2FOMUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hEd0k5RGdUeDgwVWxjZE5WSDUxc1Nlb1NvS0NnZFhaWHRpYjhWaEExVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3VGL1ZDRUdlQTI3YnRjb3NwQTVmUVNXVUw3T1Qzd2plOFV4cm5NYkZBVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhDU1RUOHNldDk2K3hndFRDTGVUSlZhSFU4OUN5Rk9tNG03UldIc3BjZnRSZVpXZjlxcG5IamhSdkE4Q3JVU1R0YzMxbHJXSS9IdVFOMWQ2Tk5vTUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiIrY0YxRWRMc0lTblV5OXM4WHdOd05xNlpoL081bXF0UXVTaTZmc0ZwR09vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik1LOFBZRTZFIiwibWUiOnsiaWQiOiIxODc2MjA3NTc1OToyNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwMzcxNTU0MTM1MjYwMjoyNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmY3NLUUJFUGUzdWRjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlM4SnhNcTlsWEZhMldFVHE5eHozc2pQQUJydzYrbDJLOHhiV29aeCtmajQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdpOVZBRjJnRDUycnZRRnFwb3dCQ2dXUG9lb0lRUjhpV0loNS9FNVh2YndiRk8ydWt6QkQycHJ6YnYvbm1nOU1kQW0wK1lLdnNpbUVjTm81eE1UQUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkK05tMnczZWdLdjlCbHV1ekxzVU51Q1BaQW9Vd1ROd3dOUVBodmtnUEVLaEMrTkhOZ3RiOFJOYkl1c0kzMEREZ0tVeFg5MG5LTEpIc25TK29tR0lCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEwMzcxNTU0MTM1MjYwMjoyNEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXZDY1RLdlpWeFd0bGhFNnZjYzk3SXp3QWE4T3ZwZGl2TVcxcUdjZm40KyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzk0MDA2MDE0LCJsYXN0UHJvcEhhc2giOiI0TmZ3YXQifQ==

  GEMINI_API_KEY: cleanEnv("GEMINI_API_KEY"),AQ.Ab8RN6JWqYL_wkxKaLsoDVp44CKx1fnah34tO_PlfdGs0zBp6A
  GEMINI_MODEL: process.env.GEMINI_MODEL || "gemini-flash-latest",
  GROK_API_KEY: cleanEnv("GROK_API_KEY") || cleanEnv("GROQ_API_KEY"),
  GROK_MODEL: process.env.GROK_MODEL || "openai/gpt-oss-20b",
  OPENAI_API_KEY: cleanEnv("OPENAI_API_KEY"),
  OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-5.6-sol",
  CLAUDE_API_KEY: cleanEnv("CLAUDE_API_KEY"),
  CLAUDE_MODEL: process.env.CLAUDE_MODEL || "claude-opus-5",
  PERPLEXITY_API_KEY: cleanEnv("PERPLEXITY_API_KEY"),
  PERPLEXITY_MODEL: process.env.PERPLEXITY_MODEL || "sonar-reasoning",
  DEEPSEEK_API_KEY: cleanEnv("DEEPSEEK_API_KEY"),
  DEEPSEEK_MODEL: process.env.DEEPSEEK_MODEL || "deepseek-v4-pro",
  OPENROUTER_API_KEY: cleanEnv("OPENROUTER_API_KEY"),
  OPENROUTER_MODEL: process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct:free",
  TOGETHER_API_KEY: cleanEnv("TOGETHER_API_KEY"),
  LLAMA_MODEL: process.env.LLAMA_MODEL || "meta-llama/Llama-3.3-70B-Instruct-Turbo",
  MISTRAL_API_KEY: cleanEnv("MISTRAL_API_KEY"),
  MIXTRAL_MODEL: process.env.MIXTRAL_MODEL || "mistral-large-latest",

  REMOVEBG_API_KEY: cleanEnv("REMOVEBG_API_KEY"),
  FOOTBALL_API_KEY: cleanEnv("FOOTBALL_API_KEY"),
  ELEVENLABS_API_KEY: cleanEnv("ELEVENLABS_API_KEY"),
  FISH_AUDIO_API_KEY: cleanEnv("FISH_AUDIO_API_KEY") || cleanEnv("FISH_API_KEY"),

  TIMEZONE: process.env.TIMEZONE || "Africa/Lagos",
  AUTO_READ: process.env.AUTO_READ === "true" || false,
  AUTO_TYPING: process.env.AUTO_TYPING === "true" || false,
  AUTO_RECONNECT: process.env.AUTO_RECONNECT !== "false",

  SESSION_DIR: "./sessions",
};

// Startup config validation
function validateConfig() {
  const warnings = [];
  const errors = [];

  if (!config.SESSION_ID) {
    errors.push("SESSION_ID is missing in .env — bot cannot authenticate without it");
  }

  if (!config.GEMINI_API_KEY && !config.GROK_API_KEY && !config.DEEPSEEK_API_KEY) {
    warnings.push("No AI API keys set in .env — AI features (autoreply, !ai, !grok, etc.) will be disabled");
  }
  if (!config.GEMINI_API_KEY) {
    warnings.push("GEMINI_API_KEY not set in .env — primary AI model unavailable");
  }
  if (!config.FOOTBALL_API_KEY) {
    warnings.push("FOOTBALL_API_KEY not set in .env — football commands will be limited");
  }
  if (!config.ELEVENLABS_API_KEY) {
    warnings.push("ELEVENLABS_API_KEY not set in .env — premium TTS unavailable");
  }
  if (!config.REMOVEBG_API_KEY) {
    warnings.push("REMOVEBG_API_KEY not set in .env — background removal unavailable");
  }

  if (errors.length > 0 || warnings.length > 0) {
    console.log("[Config] Status:");
    for (const err of errors) console.log(`  ❌ ${err}`);
    for (const warn of warnings) console.log(`  ⚠️  ${warn}`);
    console.log("");
  }

  const aiKeys = ["GEMINI_API_KEY", "GROK_API_KEY", "OPENAI_API_KEY", "CLAUDE_API_KEY", "DEEPSEEK_API_KEY", "PERPLEXITY_API_KEY", "TOGETHER_API_KEY", "MISTRAL_API_KEY"];
  const activeAI = aiKeys.filter(k => config[k]).length;
  console.log(`  🤖 AI models configured: ${activeAI}/${aiKeys.length}`);
  console.log(`  📌 Prefix: "${config.PREFIX}" | Timezone: ${config.TIMEZONE}`);
  console.log(`  📖 Auto-read: ${config.AUTO_READ} | Auto-typing: ${config.AUTO_TYPING}\n`);
}

validateConfig();

module.exports = config;
