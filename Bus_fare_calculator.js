var age = 60;
var ticketFare = 800;
var isStudent = true;
if(isStudent==true){
    ticketFare = ticketFare - ticketFare * (50/100);
    console.log(ticketFare);
}
else if(age < 10){
    ticketFare = "Free for students"
    console.log(ticketFare);
}
else if(age >= 60){
    ticketFare = ticketFare - ticketFare * (15/100);
    console.log(ticketFare);
}
else{
    console.log(ticketFare);
}