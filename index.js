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