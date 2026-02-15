// fortune.js - The Ultimate Interactive Fortune Cow 🌟
// Features: Multiple personalities, smart timing, ASCII art!
import * as cowsay from "cowsay";
import chalk from "chalk";

// ASCII Art Headers for different personalities!
const asciiHeaders = {
  silly: `
╔═══════════════════════════════════╗
║        🎪 SILLY WISDOM 🎪          ║
╚═══════════════════════════════════╝`,
  
  wise: `
┌─────────────────────────────────────┐
│        🧙‍♂️ ANCIENT WISDOM 🧙‍♂️         │
└─────────────────────────────────────┘`,
  
  sassy: `
████████████████████████████████████
█      😎 SASSY TRUTHS 😎           █
████████████████████████████████████`
};

// Different cow personalities with their own advice styles!
const personas = [
  {
    name: "silly", 
    eyes: "oo",
    tongue: "U ",
    adviceStyle: "Remember: Life's too short to be serious all the time!",
    luckyRange: 100,
    colors: {
      header: chalk.yellow.bold,
      joke: chalk.cyan,
      advice: chalk.green,
      cow: chalk.magenta,
      lucky: chalk.yellow.bold
    }
  },
  {
    name: "wise", 
    eyes: "@@",
    tongue: "",
    adviceStyle: "Ancient wisdom says:",
    luckyRange: 777,
    colors: {
      header: chalk.blue.bold,
      joke: chalk.white,
      advice: chalk.gray,
      cow: chalk.blue,
      lucky: chalk.blue.bold
    }
  },
  {
    name: "sassy", 
    eyes: "**",
    tongue: "  ",
    adviceStyle: "Real talk:",
    luckyRange: 999,
    colors: {
      header: chalk.red.bold,
      joke: chalk.yellow,
      advice: chalk.white.bold,
      cow: chalk.red,
      lucky: chalk.red.bold
    }
  }
];

// YOUR FORTUNES: Interactive jokes with silly life advice!
// Each fortune has a joke AND wisdom to live by
const fortunes = [
  {
    joke: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    advice: "Life lesson: Sometimes it's okay to work in the dark - you might discover something bright!"
  },
  {
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised. 😲", 
    advice: "Life lesson: Honest feedback is important, but timing is everything!"
  },
  {
    joke: "Why don't scientists trust atoms? Because they make up everything! ⚛️",
    advice: "Life lesson: Small things can have the biggest impact on your world!"
  },
  {
    joke: "How do you comfort a JavaScript bug? You console it! 🖥️",
    advice: "Life lesson: Sometimes all someone needs is a good listener!"
  },
  {
    joke: "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
    advice: "Life lesson: Excel at what you do, even if you're just standing around!"
  },
  {
    joke: "What's the object-oriented way to become wealthy? Inheritance! 💰",
    advice: "Life lesson: The best things in life are often passed down from others!"
  },
  {
    joke: "Why don't eggs tell jokes? They'd crack each other up! 🥚",
    advice: "Life lesson: Know your audience - not everyone can handle your humor!"
  },
  {
    joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
    advice: "Life lesson: It's okay to admit when something is outside your expertise!"
  }
];

// Get user's name from command line (if provided)
const userName = process.argv[2];

// SMART TIMING: Get current hour and create time-based greeting
const currentHour = new Date().getHours();
let timeGreeting;
if (currentHour >= 5 && currentHour < 12) {
  timeGreeting = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
  timeGreeting = "Good afternoon"; 
} else {
  timeGreeting = "Good evening";
}

// MULTIPLE PERSONALITY: Pick a random cow personality
const randIndex = Math.floor(Math.random() * personas.length);
const todaysCow = personas[randIndex];

// Pick a random fortune (joke + advice)
const randFort = Math.floor(Math.random() * fortunes.length);
const fortune = fortunes[randFort];

// Generate lucky number based on personality's range!
const luckyNum = Math.floor(Math.random() * todaysCow.luckyRange) + 1;

// Create personalized greeting combining TIME + NAME
let greeting;
if (userName) {
  greeting = `${timeGreeting}, ${userName}! Here's your personalized fortune:`;
} else {
  greeting = `${timeGreeting}! Here's your fortune for today:`;
}

// Create colorful message with personality-specific advice style!
const colorMsg = `${greeting}

${todaysCow.colors.joke(fortune.joke)}

${todaysCow.colors.advice(todaysCow.adviceStyle + ' ' + fortune.advice)}

${todaysCow.colors.lucky('🍀 Your lucky number: ' + luckyNum + ' 🍀')}`;

// Display colorful ASCII header + cow with personality
console.log(todaysCow.colors.header(asciiHeaders[todaysCow.name]));
console.log(todaysCow.colors.cow(cowsay.say({ 
  text: colorMsg,
  eyes: todaysCow.eyes,
  tongue: todaysCow.tongue
})));

// Show which personality you got (for fun!)
console.log(todaysCow.colors.header(`\n🎭 Today's personality: ${todaysCow.name.toUpperCase()} COW!`));
