const beyonceHash = {
  hits: [
    {
      title: 'Bootylicious', group: true, group_name: 'destinysChild', hair: ['straight', 'blonde', 'pink tips'], signature_look: 'fedora with yellow feather', video_theme: 'dressing room dance', best_line: 'Move your body up and down, make your booty touch the ground', fierceness: 7, formation: false, dancers: 20
    },
    {
      title: 'Single Ladies', group: false, group_name: 'none', hair: ['honey brown', 'half up, half down'], signature_look: 'black bodysuit and legs for days', video_theme: 'single ladies dance', best_line: 'if you like it then you should\'ve put a ring on it', fierceness: 10, formation: true, dancers: 2
    },
    {
      title: 'Let Me Upgrade You', group: false, group_name: 'none', hair: ['beaded bun', 'wet hair', 'honey brown', 'waves'], signature_look: 'flapper dress and bodysuit', video_theme: 'decadence, water, gold beads and pearls', best_line: 'I could do for you what Martin did for the people', fierceness: 10, formation: true, dancers: 5
    },
    {
      title: 'Sorry', group: false, group_name: 'none', hair: ['braids', 'bun', 'blonde', 'waves', 'bob'], signature_look: 'braided crown with gold bikini top', video_theme: 'party bus and Serena Williams in bodysuit', best_line: 'Boi bye', fierceness: 10, formation: false, dancers: 1
    },
    {
      title: 'Say My Name', group: true, group_name: 'destinysChild', hair: ['blonde', 'curly', 'braid', 'pony tail'], signature_look: 'none', video_theme: 'color blocked scenes with group', best_line: 'say my name, say my name', fierceness: 7, formation: true, dancers: 6
    },
    {
      title: 'Feeling Myself', group: true, group_name: 'Nicki Minaj featuring Beyonce', hair: ['blonde', 'waves'], signature_look: 'sporty bodysuit', video_theme: 'Coachella music festival', best_line: 'Im felling myself', fierceness: 9, formation: false, dancers: 0
    }
  ],
  movies: [
    { title: 'Austin Power\'s Goldmember', year: 2002, rating: 5 },
    { title: 'Dreamgirls', year: 2006, rating: 7 },
    { title: 'Obsessed', year: 2009, rating: 6 },
    { title: 'Cadillac Records', year: 2008, rating: 8 },
    { title: 'Life is But a Dream', year: 2013, rating: 6 },
    { title: 'The Pink Panther', year: 2006, rating: 4 },
    { title: 'Epic', year: 2013, rating: 7 },
    { title: 'The Fighting Temptations', year: 2003, rating: 5 }
  ]
};

const beSongs = beyonceHash.hits;
const beMovies = beyonceHash.movies;


// 1. Print all the songs
function printAllSongs() {
  let allSongs = beSongs.map(hit => hit.title);
  console.log(`${allSongs}`)
}

// 2. Print all the movies
function printAllMovies() {
  let allMovies = beMovies.map(movie => movie.title);
  console.log(`${allMovies}`)
}

// 3. Return an array of all Beyonce's hit song titles
function hitSongTitles() {
  return beSongs
}

// 4. Return an array of all Beyonce's fierceness ratings
function allFiercenessRatings() {
  const allFierce = beSongs.map(hit => hit.fierceness);
  return allFierce
}

// 5. Return all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme
function songsWithBodySuits() {
  return beSongs.filter(hit => hit.signature_look.includes('bodysuit') || hit.video_theme.includes('bodysuit'))
}

// 6. Return an array with all of the songs where Beyonce's fierceness is greater than or equal to a given number
function getSongsByFiercenessGTE() {
  const greaterFierceness = beSongs.filter(hit => hit.fierceness >= number);
  return greaterFierceness
}

// 7. Return an array with all of the movies Beyonce made after or during a given year
function getMoviesByDateGTE() {
  const duringAfterMovieYear = beMovies.filter(movie => movie.year >= number);
  return duringAfterMovieYear
}

// 8. Return all hit songs where Beyonce was in a group
function groupHits() {
  return beSongs.filter(hit => hit.group === true)

}

// 9. Return a hit song where Beyonce's hair is blonde
function findBlondeHit() {
  return beSongs.filter(hit => hit.hair.includes('blonde'))
}

// 10. Return the hit song "Sorry"
function sorry() {
  return beSongs.find(hit => hit.title === ('Sorry'))
}

// 11. Return a given song
function getSong() {
  return beSongs.filter(hit => hit.title === song)
}

// 12. Return all hit songs where Beyonce's fierceness rating is 10
function fiercestHits() {
  return beSongs.filter(hit => hit.fierceness === 10)
}

// 13. Return the sum of Beyonce's fierceness value for all of her hit songs
function hitFiercenessSum() {
  let fierceTotal = beSongs.map(hit => hit.fierceness)
  const total = fierceTotal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return total;
}

// 14. Return the average fierceness value for all Beyonce's hit songs
function hitFiercenessAverage() {
  let fierceAverage = beSongs.map(hit => hit.fierceness)
  return hitFiercenessSum() / fierceAverage.length;
}

// 15. Return the sum of Beyonce's rating value for all of her movies
function ratingSum() {
  let ratingTotal = beMovies.map(movie => movie.rating)
  const total = ratingTotal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return total
}

// 16. Return the average rating value for all of her movies
function ratingAverage() {
  let ratingAvg = beMovies.map(movie => movie.rating)
  return ratingAvg() / rateSum.length;
}

// 17. Return the sum of the total number of dancers in all of the hit song videos
function hitDancerSum() {
  let dancerTotal = beSongs.map(hit => hit.dancers)
  const total = dancerTotal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return total;
}

// 18. Return an array of Beyonce's hairstyles without repeats
function uniqueHairstyles() {
  return [...new Set(besongs.map(hit => hit.hair).reduce((array, hair) => array.concat(hair), []))]
}

// 19. Return an object where the properties are song names and the value is an object which contains that song's fierceness and the average fierceness for all songs
function songFiercenessByName() {
  return beSongs.reduce((hit_Object, hit) => {
    return {
      ...hit_Object,
      [hit.title]: {
        fierceness: hit.fierceness,
        average_fierceness: hitFiercenessAverage()
      }
    }
  })
}

// 20. Return an object where the properties are movie names and the value is an object which contains that movie's rating and the average rating for all movies
function movieRatingsByName() {
  return beMovies.reduce((movie_Object, movie) => {
    return {
      ...movie_Object,
      [movie.title]: {
        rating: movie.rating,
        average_rating: ratingAverage()
      }
    }
  })
}

// 21. Return an object with Beyonce's hairstyles as the keys and a tally of each hairstyle, eg. `{ "blonde": 3, ... }`
function hairStyleFrequency() {
  return uniqueHairstyles().reduce((hair_Object, hair) => {
    return {
      ...hair_Object,
      [hair]: beSongs.map(hit => hit.hair).flat().filter(hairstyle => hairstyle === hair).length
    }
  })
}
