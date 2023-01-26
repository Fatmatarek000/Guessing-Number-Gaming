var randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

var guessSubmit = document.getElementById('submit-btn');
var guessField = document.getElementById('guessField');
var guessflag = document.getElementById('header');
var counter = document.getElementById('counter');
var demo = document.getElementById('demo');
var card =document.getElementById('game')

guessSubmit.addEventListener('click',function checkGuess() {

  var userGuess = Number(guessField.value);


  if (userGuess === randomNumber) {
   guessflag.style.display = "block";
    guessflag.textContent="Well Done :)"
 clear();

    
  } else 
  {
    guessflag.style.display = "block";
    guessflag.textContent="Try again :(";
    GuessRemining();
    clear();
  }
})
function GuessRemining()
{
    
    if(counter.innerHTML<=3 && counter.innerHTML!=0)
    {
        counter.innerHTML--

    }else if(counter.innerHTML ==0)
    {
      guessflag.textContent=" Sorry.. Game Over ! :(";

      demo.style.opacity =0.5;
      card.style.border="2px solid red";
    }
}
function clear()
{
  guessField.value=" ";
}


