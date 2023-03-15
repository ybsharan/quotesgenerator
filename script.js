let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

let quotes = [
  {
    quotes: `"If people are doubting how far you can go, go so far that you can’t hear them anymore."`,
    person: `Michele Ruiz`,
  },
  {
    quotes: `"I wake up every morning and think to myself, How far can I push this company in the next 24 hours."`,
    person: `Leah Busque`,
  },
  {
    quotes: `"First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice."`,
    person: `Octavia Butler`,
  },
  {
    quotes: `"If there is no struggle, there is no progress."`,
    person: `Frederick Douglass`,
  },
  {
    quotes: `"A year from now you will wish you had started today."`,
    person: `Karen Lamb`,
  },
  {
    quotes: `"No matter what role of life you are in, you are a leader."`,
    person: `Jim Collins`,
  },
  {
    quotes: `"Good is the enemy of great."`,
    person: `Jim Collins`,
  },
  {
    quotes: `"A problem is a chance for you to do your best."`,
    person: `Duke Ellington`,
  },
  {
    quotes: `"You define your own life. Don't let other people write your script"`,
    person: `Oprah Winfrey`,
  },
  {
    quotes: `"Silence is the last thing the world will ever hear from me."`,
    person: `Marlee Matlin`,
  },
  {
    quotes: `"Where you are coming from doesn't matter as much as where you are going."`,
    person: `Matshona Dhliwayo`,
  },
  {
    quotes: `"Nobody cares. Keep studying."`,
    person: `Anonymous`,
  },
  {
    quotes: `"Work hard in silence, let your success be your noise."`,
    person: `Frank Ocean`,
  },
  {
    quotes: `"Experience is not what happens to you; it is what you do with what happens to you."`,
    person: `Aldous Huxley`,
  },
  {
    quotes: `"When something is important enough, you do it even if the odds are not in your favor."`,
    person: `Elon Musk`,
  },
  {
    quotes: `"Continuous improvement is better than delayed perfection."`,
    person: `Mark Twain`,
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quotes;
  person.innerText = quotes[random].person;
});
