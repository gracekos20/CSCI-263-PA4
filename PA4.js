document.getElementById("numb").addEventListener("keypress", colorFunc);

function colorFunc(){
    document.getElementById("numb").style.backgroundColor = "lightgreen";
};

function fizzBuzz(){
    let x = document.getElementById("numb").value;
    x = parseInt(x);
    let nums = [];

    for(let i = 0; i < x; i++){
        if((i+1) % 3 == 0){
            if((i+1) % 5 == 0){
                nums[i] = "FizzBuzz";
            }
            else{
                nums[i] = "Fizz";
            }
        } 
        else if((i+1) % 5 == 0){
            if((i+1) % 3 != 0){
                nums[i] = "Buzz";
            }
        } 
        else{
            nums[i] = i+1;
        }
    }
    document.getElementById("demo").innerHTML = nums;
};