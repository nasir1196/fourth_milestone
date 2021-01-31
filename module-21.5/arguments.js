function getFullName() {
    let fullName = "";
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + " " + namePart;
    }
    return fullName;
}
let nameList = getFullName("Hanif", "shanket", 'Poribahon','jonodorodi','hoice');
console.log(nameList);