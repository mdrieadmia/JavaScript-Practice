var myMarks = 70;
var friendMarks = 35;
if(myMarks >= 80){
    if(friendMarks >= 80){
        console.log("Let's go for lunch.");
    }
    else if(friendMarks >= 60 && friendMarks <= 79){
        console.log("Good luck next time.");
    }
    else if(friendMarks >= 40 && friendMarks <= 59){
        console.log("Message unseen");
    }
    else if(friendMarks < 40){
        console.log("Friend is blocked");
    }
}
else{
    console.log("Go to home and sleep");
}