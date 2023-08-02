// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
// no error 
// ////


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); /* it will throw an error because name took the name"otherName" */
// console.log(otherName); 

// /////


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); /* it will display the password */
// console.log(hashedPassword); /* there is no object named password in person so it's undefined */

//////

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second); /* it will display FALSE because 2 is not equal to 5  */
// console.log(first == third); /*  it will display False because first take 2 and third take 2 */

////

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);/*  it will display 'value' */
// console.log(secondKey); /*  it will display [1, 5, 1, 8, 3, 3] */
// console.log(secondKey[0]);   /* it will display 1 */
// console.log(willThisWork);/*  it will display 5 */





