min=1;
max=100;
random=Math.floor(Math.random() * 100)+1;

flag=true
while(flag) {
    console.log(`The randomly generated number is : ${random}`)
    number=window.prompt(`Enter a number between ${min} - ${max}`);
    number=Number(number);
    console.log(typeof number,number);
    if(isNaN(number)) {
        window.alert("Enter a valid number !")
    }else if(number > max || number < max) {
        window.alert("The entered number is out of range!")
    }else if(random==number){
        window.alert("U guessed the number correctly!")
    }else{
        window.alert("Number mismatch")
    }
    flag=false;
}

