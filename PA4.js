function fizzBuzz(){
const userInput = prompt("Please enter a number to count to:");
    for(let i = 1; i < userInput+1; i++){
        if(i % 3 == 0){
            if(i % 5 == 0){
                document.write("FizzBuzz, ");
            }
            else{
                document.write("Fizz, ");
            }
        } 
        else if(i % 5 == 0){
            if(i % 3 != 0){
                document.write("Buzz, ");
            }
        } 
        else{
            document.write(i + ", ");
        }
    }
}

let result = fizzBuzz();
document.getElementById("demo").innerHTML = result;