const icons = [
  "😂",
  "❤️",
  "🤣",
  "🙏",
  "😘",
  "🎉",
  "🥺",
  "🤦",
  "🥳",
  "👀",
  "🌹",
  "💋",
  "😈",
  "🙃",
  "😘",
  "🤑",
  "😐",
  "😷",
  "☹",
  "😱",
  "🤬",
  "🤡",
  "👹",
  "💩",
  "👽",
  "👺",
  "😻",
  "🙈",
  "🙉",
  "🙊",
  "🖤",
  "🖖",
  "🖕",
  "👅",
  "👨‍👩‍👧‍👦",
  "👩‍🍳",
  "👩‍💻",
  "🎅",
  "🧙",
  "💃",
  "🛀",
  "💑",
];

const misc = [
  `In Korea and Japan, there is a Cat Cafe where you can go to drink coffee and hang out with cats for hours.`,
  `Cats have an extra organ that allows them to taste scents in the air.`,
  `Cats make more than 100 different sounds whereas dogs make around 10000.`,
  `The Earth experiences 50,000 Earth quakes per year and is hit by Lightning 100 times a second.`,
  `The average American looks at eight houses before buying one.`,
  `Over 60% of all those who marry get divorced.`,
  `In a test performed by Canadian scientists, using various different styles of music, it was determined that chickens lay the most eggs when pop music was played.`,
  `The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.`,
  `2,000 pounds of space dust and other space debris fall on the Earth every day.`,
  `A piece of paper can be folded no more then 9 times.`,
  `Simplistic passwords contribute to over 80% of all computer password break-ins.`,
  `"Dreamt" is the only English word that ends in the letters "mt."`,
  `Odds of being killed by lightening? 1 in 2million/killed in a car crash? 1 in 5,000/killed by falling out of bed? 1 in 2million/killed in a plane crash? 1 in 25 million.`,
  `No word in the English language rhymes with month, orange, silver and purple.`,
  `In the United States, a pound of potato chips costs two hundred times more than a pound of potatoes.`,
  `In jeder Sekunde finden auf der Welt, statistisch gesehen, 2778 Geschlechtsakte statt.`,
  `Honey is the only food which does not spoil.`,
  `Canada makes up 6.67 percent of the Earth's land area`,
  `To Ensure Promptness, one is expected to pay beyond the value of service – hence the later abbreviation: T.I.P.`,
  `All polar bears are left-handed`,
  `Porcupines can float in water.`,
  `There are more plastic flamingos in the U.S that there are real ones.`,
  `Yo momma is so stupid that she sat in a tree house because she wanted to be a branch manager.`,
  `Yo momma is so poor that she washes paper plates.`,
  `Yo momma is so old that when she was born, the Dead Sea was just getting sick.`,
  `Yo momma is so skinny that her bra fits better when she wears it backwards.`,
  `Yo momma's head is so small that she uses a tea-bag as a pillow.`,
  `Yo momma so fat, that went she stepped in the water, Thailand had to declare another tsunami warning.`,
  `Yo momma is so stupid that she got hit by a parked car.`,
  `Yo momma is so ugly that she makes blind children cry.`,
  `Yo momma is so short that she can limbo under the door.`,
  `Windows isn't a virus atleast viruses do something.`,
  `3 Database SQL walked into a NoSQL bar. A little while later they walked out, because they couldn't find a table.`,
  `Latest survey shows that 3 out of 4 people make up 75% of the world's population.`,
  `Michael Sinz: "Programming is like sex... one mistake and you have to support it for the rest of your life."`,
  `Why did the programmer die in the shower? The shampoo bottle said: Wash, rinse, repeat.`,
  `The class object inherits from Chuck Norris`,
  `When Arnold says 'I'll be back' in Terminator movie it is implied that he's going to ask Chuck Norris for help.`,
  `A UDP packet walks into a bar. The bartender doesn't acknowledge him.`,
  `The past, the present and the future walk into a bar. It was tense.`,
  `What's the difference between a baby and a watermelon? One's satisfying to hit with a sledgehammer. The other's a watermelon.`,
  `Two fish in a tank. One turns to the other and says, "Do you know how to drive this thing?"`,
  `Why did the banana go see a doctor? Because it wasn't peeling well.`,
  `Arguing with a woman is like reading a software's license agreement. In the end you ignore everything and click "I agree". (Kamil DEV: Pure gold xD)`,
  `Relationship Status: just tried to reach for my dog's paw and he pulled it away so I pretended I was reaching for the remote.`,
  `Why are modern programming languages so materialistic? Because they are object-oriented.`,
  `Why are cats so good at video games? They have nine lives.`,
  `The other day my wife asked me to pass her lipstick, but I accidentally gave her a glue stick. She still isn't talking to me.`,
  `A SQL statement walks into a bar and sees two tables. It approaches, and asks "may I join you?"`,
  `Have a great weekend! I hope your code behaves the same on Monday as it did on Friday.`,
  `Two reasons I don't give money to homeless people. 1) They are going to spend it all on drugs and alcohol 2) I am going to spend it all on drugs and alcohol.`,
  `My husband and I were happy for 20 years. And then we met.`,
  `So I made a graph of all my past relationships. It has an ex axis and a why axis.`,
  `I've been in 15 school shootings and I was lucky to survive! I just had to be nice with the cops and not resist.`,
  `What do Japanese cannibals eat? Raw men.`,
  `Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says "Do you get the reference?" But Java didn't.`,
  `My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.`,
  `What do you call a pile of kittens? A meowntain.`,
  `No matter how kind you are... German kids are always Kinder.`,
  `Why does no one like SQLrillex? He keeps dropping the database.`,
  `If I make you breakfast in bed, a simple thank you is all I need. Not all this "How the fuck did you get in my house?!" nonsense.`,
  `Why did the Python data scientist get arrested at customs? She was caught trying to import pandas!`,
  `Why is Linux safe? Hackers peak through Windows only.`,
  `How can you tell a vampire has a cold? They start coffin.`,
  `How does Darth Vader like his toast? On the dark side.`,
  `Somebody stole my Microsoft Office and they're going to pay - you have my Word.`,
  `Where does batman go to the bathroom? The batroom.`,
  `They're making a movie about clocks. It's about time`,
  `Can February march? No, but April may.`,
  `It's difficult to say what my wife does, she sells sea shells by the sea shore.`,
  `Did you know crocodiles could grow up to 15 feet? But most just have 4.`,
  `What’s the difference between an African elephant and an Indian elephant? About 5000 miles.`,
  `Why was it called the dark ages? Because of all the knights.`,
  `A book just fell on my head. I only have my shelf to blame.`,
  `How much does a hipster weigh? An instagram.`,
];

let firstTime = true;

const afterLoad = async () => {
  let players = [
    ...document.querySelectorAll('div[class^="Player-module--player-name"]'),
  ];

  players.forEach((player) => {
    if (player.innerHTML.startsWith("Kamil (DEV)")) {
      player.innerHTML = concatTextWithIcon(
        firstTime ? player.innerHTML : removeOldIcon(player.innerHTML),
        "👑|🤡🌍"
      );
    } else {
      const icon = icons[getRandomNumberInRange(0, icons.length - 1)];
      player.innerHTML = concatTextWithIcon(
        firstTime ? player.innerHTML : removeOldIcon(player.innerHTML),
        icon
      );
    }
  });

  firstTime = false;
};

const concatTextWithIcon = (playerName, icon) => {
  return playerName + " " + icon;
};

const removeOldIcon = (playerName) => {
  return playerName.split(" ").slice(0, -1).join(" ");
};

// ----------------- afterClick

const performClickOnRandomCard = () => {
  const allCards = [
    ...document.querySelectorAll('li[class^="CardSelector-module--card"]'),
  ];

  allCards[getRandomNumberInRange(0, allCards.length - 1)].children[0].click();
};

const changeTheTableCaption = () => {
  document.querySelector(
    'div[class^="Table-module--table-caption"]'
  ).innerHTML = misc[getRandomNumberInRange(0, misc.length - 1)];
};

const afterClick = (event) => {
  if (
    event.path.some((el) =>
      el.className?.startsWith("CardSelector-module--card")
    )
  ) {
    const ranndomNumber = getRandomNumberInRange(0, 100);

    if (ranndomNumber == 69) {
      performClickOnRandomCard();
    } else if (ranndomNumber >= 90) {
      changeTheTableCaption();
    }
  }
};

window.addEventListener("load", () => setInterval(afterLoad, 15000));
window.addEventListener("click", afterClick);

const getRandomNumberInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
