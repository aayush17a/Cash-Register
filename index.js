const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noofNotes = document.querySelectorAll(".no-of-notes");

const Notes = [2000,500,100,20,10,5,1];


checkButton.addEventListener("click", function checkBillandCash() {
    
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value <= billAmount.value){
            showMessage("Do you want to wash plates ?");
        
            

        }
        else{
            const amountReturned = cashGiven.value - billAmount.value;
            calculateChange(amountReturned);
            

        }

    }
    else{
       showMessage("The bill amount must be greater than zero");
       
        
        
    }
});

function calculateChange(amountReturned) {
    for(let i=0;i<Notes.length;i++){
        //this is to calculate the number of notes
        const  numberofNotes = Math.trunc(amountReturned/Notes[i]);
        //this is to get the remaining amount
        amountReturned %=Notes[i];
        //this is to update the number of notes
        noofNotes[i].innerText = numberofNotes;
    }

    /* Dry Run
    bill amount = 12
    cash = 2012
    2012-12 = 2000
     numberofNotes will be  2000/2000 = 1
     amountreturned = 2000%2000 = 0
    
      bill amount = 11
    cash = 2022
    2022-11 = 2011
    2011/2000 = 1
    2011%2000 = 11
    11/100 = 0
    11%100 = 11
    11/20 = 0
    11%20 = 0
    11/10 = 1
    11%10 = 1
    1/5=0
    1%5=1
    1/1 = 1
    1%1 = 0






    */
    




}

function hideMessage(){
    message.style.display = "none";

}


function showMessage(errorMessage) {
    message.style.display = "block";
     message.innerText=errorMessage;

}



