var firstName = prompt(`Hello, What's your first name?`) || "Anonymous" ;
var lastName = prompt(`What's your last name?`) || "User";
var output = document.querySelector('#greeting');

output.innerHTML = "<h2>Thanks for visiting, " + firstName + " " + lastName + ".</h2>"
// if(firstName && lastName){
//   output.innerHTML = "<h2>Thanks for visiting, " + firstName + " " + lastName +".</h2>";
// } else {
//   output.innerHTML = "<h2> Please tell us your first and last names!</h2>"
// }
