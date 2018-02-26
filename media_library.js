class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  toggleCheckedOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let numberOfRatings = this._ratings.length;
    let ratingsSum = this._ratings.reduce(function(a, b) { return a + b; }, 0);
    let ratingsAvg = ratingsSum / numberOfRatings;
    this._ratings = ratingsAvg;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }

  set isCheckedOut(checkedOutState) {
    this._isCheckedOut = checkedOutState;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
const cdHoobastank = new Book('Hoobastank', 'Bill Tyler', 654);
const speed = new Movie('Speed', 'Jan de Bont', 116);

historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.ratings);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed.ratings);


let songs = ['Man of Mine', 'Welcome to the Jungle', 'Good Riddance'];

function randomizeSongs(songs) {
   for (let i = songs.length - 1; i > 0; i--) {
     let j = Math.floor(Math.random() * (i + 1));
     let temp = songs[i];
     songs[i] = songs[j];
     songs[j] = temp;
     return songs;
   }
};

console.log(randomizeSongs(songs));
