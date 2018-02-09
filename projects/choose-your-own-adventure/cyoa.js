var response = prompt('You Wake up in an empty room with a lone table, and on that table are two drinks, "red" and "blue". Which will you choose?');
if (''){
  response = prompt('Please type "red" or "blue"');
} else if( response === 'blue'){
  response = prompt('A doorway appears, what do you do? "walk" or "sleep"');
} else if (response === 'walk'){
  prompt("a Doorway appears. Do you walk through or not?");
} else if (response = 'walk'){
  response = prompt('You walk outside')
}
else if (response === null) {
  alert("You pass out randomly. Game Over!")
}
