//var response = prompt('string');

//if (response === 'string');{
// reponse = prompt('string');
//} else if(response === 'string');{
//} else {
//alert('string');
//}
//break
//^always break for new tree^
//else statements always goes last

var response = prompt('You wake up in a small unassuming room with a small table sitting in the center of it. There lies on the table two drinks "red" & "blue". Which will you choose?');
  if(response === 'blue'){
    response = prompt('A door appears with a bright light shining through it. What will you do? "walk" or "sleep"?');
  } if(response === 'walk'){
    response = prompt('You walk through the door and see a lone car with a basket on the roof and a key inside it. Will you "get in" or "walk away"?');
    } if(response === 'get in'){
      alert('You use the key to open the car, start the car and drive out of brightly lit building back into the city. You Win!');
  } else if(response === 'red'){
    alert('You pass out randomly. Game Over!');
    } else if(repsonse = 'sleep'){
      alert('You pass out randomly. Game Over!');
      } else if(response === 'walk away'){
        alert('You pass out randomly. Game Over!');
  }
