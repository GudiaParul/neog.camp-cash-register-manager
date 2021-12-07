
var checkButton = document.querySelector("#check button");
var cashGiven = document.querySelector("#cash given");
var billAmount = document.querySelector("#bill amount");
var noOfNotes = document.querySelector(".no of notes");
const message = document.querySelector("#error-message");

var availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];


checkButton.addEventListener("click", clickEventHandler);
function clickEventHandler() {
    if (billAmount.value > 0) {
        
        if (cashGiven.value >= billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount.value; 
            calculateChange(amountToBeReturned);
          } else {
            showMessage("Cash provided should atleast  be equal to the bill amount");
        }
      } else {
        showMessage("Invalid Bill Amount");
      }
    };
    
    function calculateChange(amountToBeReturned) {
      
      for (let i = 0; i < availableNotes.length; i++) {
        
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        
    
        noOfNotes[i].innerText = numberOfNotes;
      }
    }
    
    function hideMessage() {
      message.style.display = "none";
    }
    
    function showMessage(msg) {
      message.style.display = "block";
      message.innerText = msg;
    }
    


