const names = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Federico Valverde",
  "Kylian Mbappe",
  "Virgil van Dijk",
  "Kevin De Bruyne",
  "Robert Lewandowski",
  "Mohamed Salah",
  "Sadio Mane",
  "Sergio Ramos",
  "Eden Hazard",
  "Karim Benzema",
  "Raheem Sterling",
  "Luis Suarez",
  "Harry Kane",
  "Paulo Dybala",
  "Antoine Griezmann",
  "Alisson Becker",
  "Thibaut Courtois",
  "Jan Oblak",
];

const thoughts = [
  "Life is like a game of soccer, you need goals.",
  "The more difficult the victory, the greater the happiness in winning.",
  "Winning isn’t everything, it’s the only thing.",
  "You have to fight to reach your dream.",
  "Believe in your dreams, they were given to you for a reason.",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice.",
  "You are never a loser until you quit trying.",
  "The only way to prove that you’re a good sport is to lose.",
  "Set your goals high, and don’t stop till you get there.",
  "Your love makes me strong, your hate makes me unstoppable.",
  "In order to win the game, you must first not lose it.",
  "The best decisions aren’t made with your mind, but with your instinct.",
  "To win you have to score one more goal than your opponent.",
  "It’s not just about the game, it’s about the journey.",
  "Every disadvantage has got its advantage.",
  "I’ve never tried to hide the fact that it is my intention to become the best.",
  "Once you learn to quit, it becomes a habit.",
  "You can overcome anything, if and only if you love something enough.",
  "In football, the worst blindness is only seeing the ball.",
  "Never say never because limits, like fears, are often just an illusion.",
];

const reactions = [
  "Amazing",
  "Inspirational",
  "Thought-provoking",
  "Heartfelt",
  "Funny",
  "👏",
  "💪",
  "🔥",
  "🙌",
  "⚽",
  "🌟",
  "🏆",
  "🚀",
  "👍",
  "💯",
];

const users = [];

// Function to create email from the names array
const generateEmail = (name) => {
  return `${name.split(" ")[0].toLowerCase()}@example.com`;
};

// Get a random item given an array
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate a random username from the name array
const getRandomUsername = () =>
  `${getRandom(names).split(" ")[0].toLowerCase()}${Math.floor(
    Math.random() * 10 + 1
  )}`;

// Get a random email from the names using the create Email function
const getRandomEmail = () => generateEmail(getRandom(names));

// Function to generate a list of users
const generateUser = () => {
  const users = [];

  for (let i = 0; i < 20; i += 1) {
    const username = getRandomUsername();
    const email = getRandomEmail();
    const user = {
      username,
      email,
    };

    users.push(user);
  }

  return users;
};

// Function to get a random thought from the thoughts array
const getRandomThought = () => getRandom(thoughts);

// Function to get a random reaction from the reactions array
const getRandomReaction = () => getRandom(reactions);

// Function to generate a random date between January 1, 2020, and the current date
const getRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toISOString().split("T")[0];
};

// Function to generate a list of thoughts with associated reactions
const generateThoughts = (int) => {
  const thoughtData = [];
  let date = getRandomDate();

  for (let i = 0; i < int; i++) {
    const thought = {
      thoughtText: getRandomThought(),
      createdAt: date,
      username: getRandomUsername(),
      reactions: [],
    };

    const numberOfReactions = Math.floor(Math.random() * 10) + 1;

    for (let j = 0; j < numberOfReactions; j++) {
      const reaction = {
        reactionBody: getRandomReaction(),
        username: getRandomUsername(),
        createdAt: date,
      };

      thought.reactions.push(reaction);
    }

    thoughtData.push(thought);
  }

  return thoughtData;
};

// Exporting the functions for use in other files
module.exports = { generateUser, generateThoughts };
