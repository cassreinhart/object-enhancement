const sameKeysAndValues = (firstName, lastName) => {
    return {
        firstName,
        lastName
    };
};

const computedPropertyNames = (favoriteNumber) => {
    return {
        [favoriteNumber]: "That is my favorite!",
    };
};

const instructor = {
    firstName: "Colt",
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return "Bye!";
    }
};

const createAnimal = (species, verb, noise) => {
    const animal = {
        species,
        [verb]() {
            return noise;
        }
    }
};
