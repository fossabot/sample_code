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

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._tracks = [];
  }
  get tracks() {
    return this._tracks;
  }
  get artist() {
    return this._artist;
  }
  addTrack(track) {
    this._tracks.push(rating);
  }
  randomizeTracks(tracks) {
    for (let i = tracks.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tracks[i];
      tracks[i] = tracks[j];
      tracks[j] = temp;
      return tracks;
    }
  }
}

let cdHoobastank = new CD("Emotional B-b-b-breakdown!", "Hoobastank"]);
cdHoobastank.addTrack("The Reason");
