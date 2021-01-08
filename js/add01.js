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
  
 