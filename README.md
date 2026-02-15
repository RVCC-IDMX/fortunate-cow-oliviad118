# Week 3: Fortunate Cow

Welcome to Week 3! This assignment is your first JavaScript code in the Copilot tutorial series. You'll create a fortune-telling script that displays random fortunes using cowsay.

## Getting started

1. Open this folder in VS Code
2. Run `npm install` in the terminal
3. Run `node fortune.js` to see your first fortune
4. Read [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md) for the full assignment

## Learning objectives

- Write and run JavaScript code
- Use arrays and random selection
- Modify `copilot-instructions.md` to shape AI behavior
- Work with Agent to add features

## Files in this repository

| File/Folder                                                                  | Purpose                         |
| ---------------------------------------------------------------------------- | ------------------------------- |
| [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)                                 | Complete assignment walkthrough |
| [docs/tutorials/](docs/tutorials/)                                           | Background reading              |
| [docs/guides/](docs/guides/)                                                 | How-to guides                   |
| [docs/reference/](docs/reference/)                                           | Quick reference docs            |
| [fortune.js](fortune.js)                                                     | Your main script                |
| [ai-collaboration-summary-template.md](ai-collaboration-summary-template.md) | Reflection template             |

## Quick links

- [Full instructions](docs/INSTRUCTIONS.md)
- [Checklist](docs/CHECKLIST.md)
- [Arrays basics](docs/tutorials/arrays-basics.md)
- [Math.random() explained](docs/tutorials/math-random.md)
- [ES modules basics](docs/tutorials/esm-basics.md)
- [Adding features guide](docs/guides/adding-features.md)
- [Modifying context guide](docs/guides/modifying-context.md)
- [Cowsay options reference](docs/reference/cowsay-options.md)

## Sample output

My **Ultimate Interactive Fortune Cow** features multiple personalities, smart timing, colors, and lucky numbers! Here are some examples:

### 🎪 Silly Cow (Interactive with Name)
```text
╔═══════════════════════════════════╗
║        🎪 SILLY WISDOM 🎪          ║
╚═══════════════════════════════════╝
 _______________________________________________________________________________
/ Good evening, Olivia! Here's your personalized fortune:                       \
|                                                                               |
| Why don't eggs tell jokes? They'd crack each other up! 🥚                     |
|                                                                               |
| Remember: Life's too short to be serious all the time! Life lesson: Know your|
| audience - not everyone can handle your humor!                               |
|                                                                               |
\ 🍀 Your lucky number: 42 🍀                                                    /
 -------------------------------------------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

🎭 Today's personality: SILLY COW!
```

### 😎 Sassy Cow (with Smart Timing)
```text
████████████████████████████████████
█      😎 SASSY TRUTHS 😎           █
████████████████████████████████████
 _______________________________________________________________________________
/ Good morning! Here's your fortune for today:                                  \
|                                                                               |
| How do you comfort a JavaScript bug? You console it! 🖥️                       |
|                                                                               |
| Real talk: Life lesson: Sometimes all someone needs is a good listener!       |
|                                                                               |
\ 🍀 Your lucky number: 789 🍀                                                   /
 -------------------------------------------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

🎭 Today's personality: SASSY COW!
```

### 🧙‍♂️ Wise Cow (Mystical Numbers)
```text
┌─────────────────────────────────────┐
│        🧙‍♂️ ANCIENT WISDOM 🧙‍♂️         │
└─────────────────────────────────────┘
 _______________________________________________________________________________
/ Good afternoon! Here's your fortune for today:                               \
|                                                                               |
| Why do programmers prefer dark mode? Because light attracts bugs! 🐛          |
|                                                                               |
| Ancient wisdom says: Life lesson: Sometimes it's okay to work in the dark -   |
| you might discover something bright!                                          |
|                                                                               |
\ 🍀 Your lucky number: 333 🍀                                                   /
 -------------------------------------------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

🎭 Today's personality: WISE COW!
```

## 🚀 Features Implemented

**ADVENTUROUS LEVEL:**
- ✅ **Interactive personalization** - Use your name: `node fortune.js YourName`
- ✅ **Multiple personalities** - 3 unique cow personalities with different styles  
- ✅ **Smart timing** - Greets based on current time (morning/afternoon/evening)
- ✅ **ASCII art headers** - Custom artwork for each personality
- ✅ **Colorful output** - Each personality has its own color theme
- ✅ **Lucky numbers** - Personality-specific number ranges (1-100, 1-777, 1-999)
- ✅ **8 original jokes** - Mix of programming humor and general jokes
- ✅ **Dual-purpose fortunes** - Each fortune includes both joke AND life advice

## Usage

**Basic:** `node fortune.js`  
**Personalized:** `node fortune.js Olivia`
