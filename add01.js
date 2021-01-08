function askUserName() {
    var userName = prompt("Whats Your Favorite Animal?");
  
    if (userName == "Lion", "Tiger", "Bear") {
      document.write("Oh MY!");
    } else if (userName == "Dog", "Cat") {
      alert("I Like " + userName + "'s Too!");
      document.write("Welcome to the site " + userName + " Lover!");
    } else {
        document.write("Welcome to My Website!")
    }
}
  
 