//console.log("Hello");


//console.log("Intro");


//document.getElementById('btn').innerText = "Loaded"
//document.getAnimations
//const lbl = document.getElementsByClassName('main-lab1')
//lbl.innerText = "Changed";


function loadData(){
    console.log('calling the server');

}

function sayHello(name){
    console.log("Hello" + name);


}

function calculateTaxes(year, income){
    // do the magic

    const total = income / year;

    return total;

}

function ageMessage(age) {
    if(age < 100) {
        console.log("Don't worry, you are young");
    }
    else if(age === 100) {
        console.log("Congrats on the century");
    }
    else { 
        console.log("Sorry bud, you are getting old");
    }
}

function sum(num1, num2) {
    return (num1 + num2);
}

function printNumbers() {
    // print numbers from 0 to 20
    // except 7, 13
    for(let i = 0; i < 21; i++)
    {
        if (i !=7 && i !=13) {
        console.log(i);
        }
    }
    
}

function someMath(){
    let nums = [12,4,1,56,57,29,87,18,90,28,11,84,58,2,95,67,24,6];
    // 1 - print every number
    for(i = 0; i < nums.length; i++) {
        let numb = nums[i];
            console.log(numb);

        }
    }

        // 2 - print numbers greater than or equal to 50
        for(i = 0; i < nums.length; i++) {
            let numb = nums[i];
            if(numb >= 50) {
                console.log(numb);

        }
    }



function init(){
    console.log('page loaded');

    // hook events

    // load data
    loadData();

    sayHello("Sergio");
    sayHello("John");
    sayHello("Jane");

    let total = calculateTaxes(2023, 80000);

    console.log("Total to pay for 2023: " + total); 

    ageMessage(28);

    let answer = sum(21, 21);
    console.log("The answer is: " + answer); // the answer to the life the universe and everything
}

printNumbers();
someMath();

window.onload = init; 

