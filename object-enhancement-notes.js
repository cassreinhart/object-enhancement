function makePerson(first, last, age) {
    return {
        first: first,
        last: last,
        age: age, 
        isAlive: true
    };
}

//shorthand option
function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isAlive: true
    };
}

//methods
//a function you are storing as a property in an obj
const mathStuff = {
    x: 200,
    add: function(a, b){
        return a + b;
    },
    square: function(a){
        return a * a;
    },
} //to use a method, type mathStuff.add or mathStuff.square

//shorthand way
const mathStuff = {
    x: 200,
    add(a, b){
        return a + b;
    },
    square(a){
        return a * a;
    }
} //very common!
//you CAN use arrow fns but still need a property name before declaring the function (without shorthand);

// make an obj to look up color name based on hexcode
const color = {
    periwinkle: '9c88ff',
    '9c88ff': 'periwinkle'
};

function makeColor(name, hex) {
    return {
        name: hex,
        hex: name
    };
}

makeColor('bright ube', 'd6a2e8')
//{name: 'd6a2e8', hex: 'bright ube'} 
//not quite what we wanted...

//instead, without enhancement:
function makeColor(name, hex) {
    const color = {};
    color[name] = hex;
    color[hex] = name;
    return color;
}

//with object enhancement (computed properties)
function makeColor(name, hex) {
    return {
        [name]: hex,
        [hex]: name
    }; //straight brackets around keyname
} //{bright ube: 'd6a2e8', d6a2e8: 'bright ube'} 

const mystery = {
    [6 + 7] : 'thirteen' //the code inside the brackets will be evaluated
};

const obj = {};
obj[6+7] = 'thirteen'; //same idea as above, but shorthand we can do it inside the object literal