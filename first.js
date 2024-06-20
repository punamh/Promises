function calculate(num1,num2){
    function operation(num1,num2,callback){
      return callback(num1,num2);
    }
    function add(num1,num2){
      return num1+num2;
    }
    function mul(num1,num2){
      return num1*num2;
    }
    let addition = operation(num1,num2,add);
      console.log(`addition of ${num1} and ${num2} is ${addition}`);
  
    let multiply = operation(num1,num2,mul)
    console.log(`Multiplication of ${num1} and ${num2} is ${multiply}`);
  }
  calculate(5,8);
  