//This code use for callBack function
function callBack(name, clickHandler) {
    clickHandler(name);
}
let actorName = "Tom Hanks";
callBack(actorName, greetMorning);

function greetMorning(name) {
    console.log("Good Morning", name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}
callBack('Sakib khan', greetEvening);

function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}

callBack('Nasir Khan', greetMorning);
callBack('Jabir Khan', greetAfternoon);
callBack('Ubar Khan', greetEvening);

