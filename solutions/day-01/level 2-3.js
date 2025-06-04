// #1
let monthOfTheYear = prompt("Enter a month").toLowerCase();
if (monthOfTheYear === "january" || monthOfTheYear === "march" || monthOfTheYear === "may" || monthOfTheYear === "july" || monthOfTheYear === "august" || monthOfTheYear === "october" || monthOfTheYear === "december") {
    console.log(monthOfTheYear + " has 31 days");
} else if (monthOfTheYear === "april" || monthOfTheYear === "june" || monthOfTheYear === "september" || monthOfTheYear === "november") {
    console.log(monthOfTheYear + " has 30 days");
} else if (monthOfTheYear === "february") {
    let year = prompt("Enter a year");
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(monthOfTheYear + " has 29 days in the year " + year);
    } else {
        console.log(monthOfTheYear + " has 28 days in the year " + year);
    }
}