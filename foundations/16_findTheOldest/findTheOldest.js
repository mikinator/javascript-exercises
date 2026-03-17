const findTheOldest = function(people) {
    people.map(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    })
    people.sort((a,b) => ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;

/**
 * FIND AGE
 * GET yearofbirth - yearofdeath
 * IF person[i].yearofdeath == undefined
 *  SET person[i] TO new DATE.now()
 *  
 * 
 * 
 */
