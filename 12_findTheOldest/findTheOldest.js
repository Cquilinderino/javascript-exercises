/**
 * Function to parse array of objects and return oldest person
 * @param {people} - Array of people with name, YOB and YOD
 * @return {oldestPerson} - returns name of oldest person
 */
const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();

    return people.reduce((res, person) => {
        const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
        return age > res.age ? {person, age} : res;
    }, {person: null, age: 0}).person;
};

// Do not edit below this line
module.exports = findTheOldest;
