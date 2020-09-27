class My_calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.readyToReset = false;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {

    if ( !this.operation ) { //если оператор неопределен
            if ( (this.currentOperand =="" ) || (( number!="-" ) ) && (this.previousOperand.length==0))
            { // то пишем в первый операнд
              if (number === "." && this.currentOperand.includes(".")) return; //если точка уже есть, то вторую не ставит
              this.currentOperand = this.currentOperand.toString() + number.toString(); // в противном случае добавляет введенный символ  
            }
              else {
                if ((number === "." && this.previousOperand.includes("."))||
                (number === "-" && this.previousOperand.includes("-")) ) return; //если точка уже есть, то вторую не ставит
                this.previousOperand = this.previousOperand.toString() + number.toString(); 
                this.currentOperandTextElement.innerText += this.previousOperand.toString() + number.toString();
              }
      } 

      
      
    else {//если оператор опреден
      if (number === "." && this.previousOperand.includes(".")) return; //если точка уже есть, то вторую не ставит
       //если есть 2 операнда, то вычислить и затем в currentOperand записать  результат , а минус вписать в операнд
       if ((this.currentOperand != "" ) && (this.previousOperand!="") && (number==="-")) {
         this.compute();
         //this.operation = "-";
         this.previousOperand = this.previousOperand.toString() + number.toString();
       }
      else {
       this.previousOperand = this.previousOperand.toString() + number.toString(); // в противном случае добавляет введенный символ 
      let s = 0;}
    } 

  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "" && this.currentOperand !== "") {
      this.compute();
    }
   if (this.currentOperand!=null) {
    
    this.operation = operation;
    if (this.operation== "√") {
      this.compute();
    }
   // this.currentOperandTextElement.innerText = this.currentOperand+operation;
    }
   // this.previousOperand = this.currentOperand;
   // this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if ((isNaN(prev) || isNaN(current)) && (this.operation!= "√")) return;
   
    if (!(isNaN(prev) || isNaN(current)) && (this.operation ==="") && 
    (prev<0 ||current<0 )  ) 
    {this.operation = "-";}
    switch (this.operation) {
      case undefined:
        computation = prev + current;
        break;
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation =  current + prev;
        break;
        
        case "√":
          if ( !isNaN(current) ) {
            if (current<0) {
              this.currentOperandTextElement.innerText ="так делать нельзя !";
              computation="так делать нельзя !";
            }
            else {  computation = Math.sqrt(current);}
            break;
            }
            if ( !isNaN(prev) ) {
              if (prev<0) {
                this.currentOperandTextElement.innerText ="так делать нельзя !";
                computation="так делать нельзя !";
              }
              else {  computation = Math.sqrt(prev);}
              break;
              }    
              
        break;
      case "*":
        computation = prev * current;
        break;
        case "^":
          computation = Math.pow( current, prev );
          break;
      case "÷":
       // computation = prev / current;
       computation =  current / prev;
        break;
      default:
       
      //  return;
    }
    this.readyToReset = true;
    this.currentOperand = computation;
    this.currentOperandTextElement.innerText = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) { //пересчитали 

    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      if (number =="-") {return number+integerDisplay;}
      else { return integerDisplay;}
    }
  }

  updateDisplay() { //перерисовали

    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
    
      this.currentOperandTextElement.innerText = this.currentOperand+this.operation+this.previousOperand;
    } else 
      {
        //this.previousOperandTextElement.innerText = "";
        this.currentOperandTextElement.innerText = this.currentOperand+this.previousOperand;
      };
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const operationButtonsqrt = document.querySelectorAll("[data-operation-sqrt]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const my_calculator = new  My_calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
     my_calculator.previousOperand === "" &&
     my_calculator.currentOperand !== "" && my_calculator.operation == undefined && 
      my_calculator.readyToReset
    ) {
     // my_calculator.currentOperand = "";
      my_calculator.readyToReset = false;
    }
    my_calculator.appendNumber(button.innerText);
    my_calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    my_calculator.chooseOperation(button.innerText);
  //  my_calculator.updateDisplay();
  });
});
operationButtonsqrt.forEach((button) => {
  button.addEventListener("click", () => {
    my_calculator.operation = "√";
    if ( my_calculator.currentOperand !="") {
      if (my_calculator.currentOperand >=0 ) {
        my_calculator.currentOperandTextElement.innerText = Math.sqrt(my_calculator.currentOperand);

      } 
      else { 
        my_calculator.previousOperandTextElement.innerText = "так делать нельзя.....";
        //my_calculator.previousOperandTextElement.innerText = "так делать нельзя.....";
      }
    }
    return; 
  //  my_calculator.updateDisplay();
  });
});
equalsButton.addEventListener("click", (button) => {
  my_calculator.compute();
  my_calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
 // my_calculator.clear();
 // my_calculator.updateDisplay();
 my_calculator.currentOperand = "";
 my_calculator.previousOperand = "";
 my_calculator.operation = "";
 my_calculator.currentOperandTextElement.innerText = "";
 my_calculator.previousOperandTextElement.innerText = "";
 my_calculator.readyToReset = true;

});

deleteButton.addEventListener("click", (button) => {
  my_calculator.delete();
  my_calculator.updateDisplay();
});
