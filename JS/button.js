var button = document.querySelector('.dropbtn')
var content = document.querySelector('.dropdown-content');

button.addEventListener('click', function(){

  if(content.style.display === 'none'){
    content.style.display = 'block';
  } else{
    content.style.display = 'none';
  }
});
