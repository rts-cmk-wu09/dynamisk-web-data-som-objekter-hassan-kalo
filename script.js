/* const user = {
    fName: 'Hassan',
    lName: 'Kalo',
    age: 28,
    ophold: 'Vanløse'
} */

const users = {
    hassan:{age: 28, ophold: 'Vanløse', age:56},
    martin:{age: 33, ophold: 'Vanløse'},
    jack:{age: 28, ophold: 'Vanløse'},
    john:{age: 30, ophold: 'Vanløse'}
    
}


/* const user = ['a','b','c','d','e','f'] */

for (let prop of users) {
    //console.log(user.prop); this notaion does not work
    console.log(prop);
    //console.log(users[prop]);
}





/* const letters = ['a','b','c']
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i])
    
} */


/* const letters1 = {
    0:'a',
    1:'b',
    2:'c'
}
console.log(letters1[0])
for (let i = 0; i < letters1.length; i++) {
    console.log(letters1[i])
    
} */
