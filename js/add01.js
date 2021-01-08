function askUserName() {
    var animalName = prompt("Whats Your Favorite Animal?");
  
    if (animalName == "lion") {
      alert('Why!!!');
      document.write("Oh MY!");
    } else if (animalName == "Dog", "Cat") {
      alert("I Like " + animalName + "'s Too!");
      document.write("Welcome to the site " + animalName + " Lover!");
    } 
}

askUserName();
  
function animalQuiz() {
  let animalQuiz = prompt('Which animal is scarier? lions, tigers or bears?');
  
  alert('Who likes ' + animalQuiz + ' anyway?');
  
  alert('If you really like lions, type lion in as your favorite animal.  If you dont, feel free to type in ANY animal you want!');
  }

animalQuiz();

  function printNumbers() {
    let userInput = prompt('How many pictures of lions do you want?')
      document.write('<p>' + userInput + '</p>')
    for(let i = 0; i < userInput; i++){
      document.write('<img src="img/liontiger.jpg"></img>')
    }
  }

