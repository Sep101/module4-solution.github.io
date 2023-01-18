  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var person in names) { /* fill in parts of the 'for' loop to loop over names array */
    //console.log(names[person])  
  
    if ((names[person][0] == "J") || (names[person][0] == "j")) {
      //console.log("Good Bye " + names[person]);
      byeSpeaker.speak(names[person])
    } 
    else {
      //console.log("Hello " + names[person]);
      helloSpeaker.speak(names[person])
    }
  }