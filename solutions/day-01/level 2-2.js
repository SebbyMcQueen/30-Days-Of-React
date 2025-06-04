// #1
let score = prompt("Enter your grade");
let grade = "";
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score < 90) {
    grade = "B";
} else if (score >= 60 && score < 70) {
    grade = "C";
} else if (score >= 50 && score < 60) {
    grade = "D";
} else if (score >= 0 && score < 50) {
    grade = "F";
}
console.log("Your grade is: " + grade);

// #2
let month = prompt("Enter a month").toLowerCase();
if (month === "january" || month === "february" || month === "december") {
    console.log(month + " is a winter month");
} else if (month === "march" || month === "april" || month === "may") {
    console.log(month + " is a spring month");
} else if (month === "june" || month === "july" || month === "august") {
    console.log(month + " is a summer month");
} else if (month === "september" || month === "october" || month === "november") {
    console.log(month + " is an autumn month");
}

// #3
let day = prompt("Enter a day").toLowerCase();
switch (day) {
    case "monday":
        console.log("Monday is a working day");
        break;
    case "tuesday":
        console.log("Tuesday is a working day");
        break;
    case "wednesday":
        console.log("Wednesday is a working day");
        break;
    case "thursday":
        console.log("Thursday is a working day");
        break;
    case "friday":
        console.log("Friday is a working day");
        break;
    case "saturday":
        console.log("Saturday is a weekend");
        break;
    case "sunday":
        console.log("Sunday is a weekend");
        break;
}


