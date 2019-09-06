var n = 1;
var outputTarget = document.querySelector("#exercise1");
var outputHtml = "<ul>";

while (n <= 10) {
  console.log(n);
  outputHtml += "<li>" + n + "</li>";
  n++;
}
outputHtml += "</ul>"

outputTarget.innerHTML = outputHtml;


var n = 15;
var outputTarget = document.querySelector("#exercise2")
var outputHtml = "<ul>"

while (n > 0) {
console.log(n);
  if ( n % 2 === 0) {
    outputHtml += "<li>even</li>";
  } else {
    outputHtml += "<li>odd</li>";
  }
  n--;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml
