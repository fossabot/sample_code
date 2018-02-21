let text = "Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.";

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

let textWords = text.split(" ");
let betterWords = [];

for (let eachWord = 0; eachWord < textWords.length; eachWord++) {
  for (let badWord = 0; badWord < unnecessaryWords.length; badWord++) {
      if (textWords[eachWord] === unnecessaryWords[badWord]) {
        textWords.splice(eachWord, 1);
      } else if (!betterWords.includes(textWords[eachWord])) {
        betterWords.push(textWords[eachWord]);
  }
  }
}

let wordCount = 0;
for (let eachWord = 0; eachWord < textWords.length; eachWord++) {
  for (let badWord = 0; badWord < overusedWords.length; badWord++)
       {
       if (textWords[eachWord] === overusedWords[badWord]) {
        wordCount++;
      }
  }
}

let sentences = 0;
for (let character = 0; character < text.length; character++) {
  if (text[character] === "." || text[character] === "!" || text[character] === "?") {
    sentences++;
  }
}

console.log("The text contains " + textWords.length + " words")
console.log("There are " + wordCount + " instances of overused words");
console.log("There are " + sentences + " sentences");
console.log(betterWords.join(" "));
