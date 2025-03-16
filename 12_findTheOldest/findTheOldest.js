const findTheOldest = function(people) {
    const year = new Date().getFullYear()
    const theOldest = people.reduce((oldest, person) => (((person.yearOfDeath || year)- person.yearOfBirth) > ((oldest.yearOfDeath || year)- oldest.yearOfBirth)) ? person : oldest, people[0]);
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
