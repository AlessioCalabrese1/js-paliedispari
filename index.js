
/* PALINDROMA */


let userWord = prompt("Inserire una parola!");

palindromeControl(userWord);


function palindromeControl(userW) {
    let userWordReverse = [];
    for (let index = userW.length - 1; index >= 0; index--) {
        userWordReverse += userW[index];
        console.log("La lettera " + index + " è: " + userW[index]);
    }
    console.log(userWordReverse);
    if (userW != userWordReverse) {
        console.log("La parola NON è palindroma!");
    } else{
        console.log("La parola è palindroma!");
    }
}


/* PALINDROMA CON METODI */

/*  let userWord = prompt("Inserire una parola!");

 let userWordReverse = userWord.split("");
 userWordReverse = userWordReverse.reverse("");
 userWordReverse = userWordReverse.join("");

 if (userWord === userWordReverse) {
    console.log("La parola è palindroma!");
 } else{
    console.log("La parola NON è palindroma!");
 } */





/* PARI E DISPARI */
/* let max = 5;
let min = 1;

let userChoice = prompt("Scegliere pari o dispari!");

while ((userChoice != "pari") && (userChoice != "dispari")) {
    userChoice = prompt("La scelta inserita NON è corretta, inserire pari o dispari!");
}


let userNumber = parseInt(prompt("Inserire un numero da 1 a 5!"));

while (isNaN(userNumber) || (userNumber < 1) || (userNumber > 5)) {
    userNumber = parseInt(prompt("Il numero inserito NON è corretto, reinserire il numero!"));
}

let pcNumber = randomGeneratorNumber(max, min);
console.log(userNumber);
let sum = pcNumber + userNumber;
console.log(sum);

evenOdd(sum); 



function randomGeneratorNumber(max, min) {
    return Math.floor((Math.random() * max) + min);
}


function evenOdd(sum) {
    if ((((sum % 2) === 0) && userChoice === "pari") || (((sum % 2) === 1) && userChoice === "dispari")) {
        console.log("Ha vinto l'utente!");
        return;
    } else{
        console.log("Ha vinto il pc!");
        return;
    }
} */