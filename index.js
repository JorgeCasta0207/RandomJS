const myName = "Jackson Potter";
const counter = document.getElementById('counter');
let count = 0;


// New element using JS
// const newThing = document.createElement('h3');
// newThing.textContent = "Da new New Thing";
// document.body.appendChild(newThing);



//Incrementing works
const incrementBTN = document.getElementById('myBTN1');
const decrementBTN = document.getElementById('myBTN2');
incrementBTN.addEventListener('click', function(){
    count++;
    counter.innerHTML = count;
});
decrementBTN.addEventListener('click', function(){
    count--;
    counter.innerHTML = count;
});



// Inputting Name
function showName(){
    let nameInput = document.getElementById('nameInput');
    let nameOutput = document.getElementById('nameOutput');
    localStorage.setItem('nameInput', nameInput.value);

// For creating an array of usernames
    // let users;

    // if(localStorage.getItem('users') === null){
    //     users = [];
    // }else{
    //     users = JSON.parse(localStorage.getItem('users'))
    // }

    // users.push(nameInput);

    // localStorage.setItem('users', JSON.stringify(users));

    alert('Welcome !');
    nameOutput.textContent = "Yo whats up, " + nameInput.value + "!" + " Increment/Decrement some numbers !";

}


// localStorage.setItem('name', 'Bobby');
// localStorage.setItem('age', 30);

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

console.log(`My name is ${name}, I am ${age} years old.`);

localStorage.clear();



// if(nameInput.value == "Jackson Potter"){
//     console.log("Whats up Jacky Boy");
// }else if(nameInput.value == "Bob"){
//     console.log("How ya doing bob");
// }else{
//     console.log("Ima be real with you pimp I dont know you");
// }


//Changing Text Color
const changeColor = document.getElementById('colorBTN');
changeColor.addEventListener('click', function(){
    document.getElementById('changeDaColor').style.color = "red";

});



// Both parent and child(inner element)will fire
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
parent.addEventListener('click', ()=>{
    console.log('parent has been clicked');
});

child.addEventListener('click', ()=>{
    console.log('child has been clicked');
});


// Event Delegation
const daParent = document.querySelector('#daParent');
daParent.addEventListener('mouseover', event =>{
    if(event.target.tagName === 'LI'){
        console.log(`Click ${event.target.tagName}`)
    }
})



// document.getElementById('todoForm').addEventListener('su')


// function showName(){
//     let nameInput = document.getElementById('nameInput');
//     let nameOutput = document.getElementById('nameOutput');

//     // localStorage.setItem('nameInput');
//     nameOutput.textContent = "Yo whats up, " + nameInput.value + "!" + " Increment some numbers pimp !";

// }






// const isAdult = myAge >= 18 ? "I am an adult." : "I am not an adult.";

// if(myAge < 18){
//     console.log("I am not an adult");
// }else{
//     console.log("I am an adult");
// }
 

// console.log(`My name is ${myName} I am ${myAge} years old, ${isAdult}`);

