let app = new Vue({
    el : '#app',
    data : {
        answer: 0,
        histories: [],
        userInput :{
            firstNumber : '',
            secondNumber : '',
            operator : '',
       },
       validation: {
        firstNumberStatus : false,
        secondNumberStatus : false,
        operatorStatus : false,

       },
       saveStatus : false,
    },
    methods: {
        calculation(){
            this.checkValidation();
           
            if(!this.validation.firstNumberStatus && !this.validation.secondNumberStatus && !this.validation.operatorStatus ){
                const result = this.operation();
                this.answer = `${this.userInput.firstNumber} ${this.userInput.operator} ${this.userInput.secondNumber} = ${result} `;
                this.saveStatus = true;
                this.clearForm();
            }
        },
        checkValidation(){
            this.validation.firstNumberStatus = this.userInput.firstNumber == '' ? true : false;
            this.validation.secondNumberStatus = this.userInput.secondNumber == '' ? true : false;
            this.validation.operatorStatus = this.userInput.operator == '' ? true : false;
        },
        clearForm(){
            this.userInput.firstNumber = '';
            this.userInput.secondNumber = '';
            this.userInput.operator = '';
        },
        cleanForm(){
            this.validation.firstNumberStatus = false;
            this.validation.secondNumberStatus = false;
            this.validation.operatorStatus = false;
            this.answer = 0;
            this.histories = [];
            this.clearForm
        },
        save(){
            if(this.saveStatus){
                this.histories.push(this.answer)
                this.answer = 0
            }
            this.saveStatus = false
        },
        operation(){
            let num1 = parseInt(this.userInput.firstNumber);
            let num2 = parseInt(this.userInput.secondNumber);
            switch(this.userInput.operator){
                case '+': 
                    return num1 + num2;
                    break;
                case '-': 
                    return num1 - num2;
                    break;
                case '*': 
                    return num1 * num2;
                    break;
                case '/': 
                    return num1 / num2;
                    break;
                default :
                    return 'error opertor'
            }
        }
    }
    
})