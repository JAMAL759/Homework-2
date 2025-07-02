
const tryd = ""

function calc() {

    

const numberr1 = Number(prompt("Ener a number "));

const operator = prompt("Ener an operator ");


const numberr2 = Number(prompt("Ener a number "));

if ( isNaN(numberr1) && isNaN(numberr2)) {
    alert("Sorry you've entered the wrong number");
    
}





    

if ( numberr2 == 0 && operator == '/' ) { 
    alert("can't have division with zero");
}

else {


    let sum = 0 

switch(operator) {
    case "+":
       sum =  numberr1 + numberr2;
       break;
       
    case "-":
        sum =  numberr1 - numberr2;
       break; 
       
    case "*":
        sum =  numberr1 * numberr2;
       break; 

    case "/":
       sum =  numberr1 / numberr2;
       break; 

    case "**":
      sum =  numberr1 ** numberr2;
       break; 
       
     


       
       
}
}


right = false;
if ( operator != "+"){
    if (operator != "-"){
        if (operator != "/"){
            if(operator !="*"){
                if(operator != "**"){
                    right = true;
                }
            }
        }
    }
}


if ( right == true) {
    alert("You have chose the wrong operator");
}
else {
    alert("This is the answer = "+sum);
     tryd = prompt("Would you like to begin again? ");
}









}

 let text ="";

 const h = calc();

 switch(tryd){


    case "yes":
        calc();
     break;


     case "yeah":
        calc();

    
    case "ok":
        calc();


    case "true":

        calc();


    case "sure":
        calc();


    default : 
    text = "Thank you for using the calculator";


 }
